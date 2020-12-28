class PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  acts_as_token_authentication_handler_for User, except: [:index], if: lambda { |controller| controller.request.format.json? }
  before_action :authenticate_user!, if: lambda { |controller| controller.request.format.html? }
  skip_before_action :authenticate_user!, only: [:create, :index]

  MAX_FEED = 100

  def index
    puts request.headers.env.reject { |key| key.to_s.include?('.') }

    if params[:around].present?
      (lat, lng) = params[:around].match(/([\d.]+),([\d.]+)/).captures
      @photos = Photo.joins(:locations).where("trunc(locations.lat,4) = trunc(?,4) and trunc(locations.lng,4) = trunc(?,4)",lat.to_f, lng.to_f)
    else
      @photos = Photo.all
    end

    photos = nil
    videos = nil
    if current_user != nil
      photos = Photo.where("user_id = ? or user_id is NULL", current_user.id)
      videos = Video.where("user_id = ? or user_id is NULL", current_user.id)
    else
      photos = Photo.where(user: nil).order("created_at desc")
      videos = Video.where(user: nil).order("created_at desc")
    end


    @feed = [photos, videos].flatten(2).sort_by{|a| a.created_at}.reverse()[0..MAX_FEED]
    respond_to do |f|
      f.html
      f.json { render json: @feed.map{|p| {
        url: p.is_a?(Photo) ? p.image(:medium).url : p.video.url,
        class: p.class.name,
        #image: Base64.encode64( (p.class == Photo ? p.image(:medium) : p.video).read).gsub("\n",''),
        screenshot: p.is_a?(Video) ? p.video(:screenshot).url : "",
        name: p.name,
        filename: p.name,
        id: p.id,
        around_url: p.locations[0].present? ? photos_url(around: "#{p.locations[0].lat},#{p.locations[0].lng}") : "",
        location_name: (p.locations[0].address rescue "Untitled")
      }}}

    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render json: { ok: 'destroy' }
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user = current_user if current_user.present?
    @photo.image_derivatives!
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
