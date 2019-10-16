require 'rails_helper'

RSpec.describe UtilityController, type: :controller do
  it "should respond to /alive as ok" do
    get :alive
    expect(response).to have_http_status(:ok)
  end
end
