class VideosController < ApplicationController

  def index
    @videos = Video.all
    render json: {videos: @videos}
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render json: {video_id: @video.id}
    else
      render json: {errors: @video.errors}, status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit!
  end
end