# frozen_string_literal: true

class ApplicationController < ActionController::Base

  before_action :verify_authenticity_token, unless: :json_request, except: [:index]
  acts_as_token_authentication_handler_for User#, if: -> (controller) { controller.request.format.json? }

  respond_to :html, :json, :js

  private

  alias_method :orig_current_user, :current_user
  def current_user
    email = request.headers["HTTP_X_USER_EMAIL"]
    token = request.headers["HTTP_X_USER_TOKEN"]
    user = User.find_by(email: email,authentication_token: token)
    return orig_current_user if user.blank?
    user
  end

  def json_request
    request.format.json?
  end

end
