class ApplicationController < ActionController::Base

  before_action :verify_authenticity_token, unless: :json_request, except: [:index]
  acts_as_token_authentication_handler_for User, if: lambda { |controller| controller.request.format.json? }

  respond_to :html, :json, :js

  private

  def json_request
    request.format.json?
  end

end
