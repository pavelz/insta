require 'rails_helper'

RSpec.describe FeedController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      records = {ok: true}.to_json
      expect(response.body).to eq(records)
      expect(response).to have_http_status(:success)
    end
  end
end
