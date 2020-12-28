class UtilityController < ApplicationController
  #skip_before_action :authenticate_user!
  def alive
    Rails.logger.warn("OK JASON RAILS 😂")
    render plain: "OK RAILS ✌️"
  end
end
