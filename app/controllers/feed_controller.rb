class FeedController < ApplicationController
  def index
    photos = current_user.photos
    videos = current_user.videos

    @feed = [photos, videos].flatten(1).sort_by{|a| a.created_at}.reverse[0..5]
  end
end