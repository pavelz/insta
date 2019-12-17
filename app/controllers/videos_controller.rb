class VideosController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @videos = Video.all
    render json: {videos: @videos}
  end

  def create
    @video = Video.new(video_params)
    @video.user = current_user
    if @video.save
      render json: {video_id: @video.id}
    else
      render json: {errors: @video.errors}, status: 422
    end
  end

  private

  def video_params
    @videos = Video.all
    params.require(:video).permit!
  end
end
