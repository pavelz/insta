require 'rails_helper'

RSpec.describe "Feed", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/feed"
      expect(response).to have_http_status(:success)
    end
  end

end
