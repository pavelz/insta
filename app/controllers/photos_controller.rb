class PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]


  def index
    if params[:around].present?
      (lat, lng) = params[:around].match(/([\d.]+),([\d.]+)/).captures
      @photos = Photo.joins(:locations).where("trunc(locations.lat,4) = trunc(?,4) and trunc(locations.lng,4) = trunc(?,4)",lat.to_f, lng.to_f)
    else
      @photos = Photo.all
    end

    photos = current_user.photos.limit(10) rescue Photo.where(user: nil)
    videos = current_user.videos.limit(10) rescue Video.where(user: nil)

    @feed = [photos, videos].flatten(1).sort_by{|a| a.created_at}.reverse()[0..5]

    respond_to do |f|
      f.html
      f.json { render json: @feed.map{|p| {url: p.class == Photo ? p.image[:medium].url : p.video.url, class: p.class.name, name: p.name, id: p.id}} }
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    render json: { ok: 'destroy' }
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user = current_user if current_user.present?
    @photo.save!

    @location = Location.new(location_params)
    @location.photo_id = @photo.id
    @location.save!

    @photo.location_id = @location.id
    @photo.save!

    HardWorker.perform_async(@location.id)

    respond_to do |r|
      r.html
      r.json{ render json: {ok: true}}
    end
  end

  private

  def location_params
    params.require(:location).permit!
  end

  def photo_params
    params.require(:photo).permit!
  end
end
