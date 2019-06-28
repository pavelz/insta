class PhotosController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @photos = Photo.all
    respond_to do |f|
      f.html
      f.json { render json: @photos.map{|p| {url: p.image[:medium].url, name: p.name, id: p.id}} }
    end
  end

  def create

    @photo = Photo.new(photo_params)
    @photo.save

    @location = Location.new(location_params)
    @location.photo_id = @photo.id
    @location.save
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
