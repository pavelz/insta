class FeedController < ApplicationController
  def show
    render json: {ok: true}
  end
end