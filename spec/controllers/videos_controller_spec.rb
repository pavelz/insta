require 'rails_helper'

RSpec.describe VideosController, type: :controller do
  before :each do
    @file = fixture_file_upload("files/video.mp4","video/mp4")
    @non_video_file = fixture_file_upload('files/borat.jpg','image/jpeg')
    user = User.create(email: "hello@hello.com", password:"asassasadddasd")
    sign_in(user)
  end

  it "should fail on loading of non-mp4 files " do
      video = Hash.new
      video['name'] = 'borat.jpg'
      video['video'] = @non_video_file

      post :create, params: {video: video}
      expect(response).to have_http_status(:unprocessable_entity)
  end

  it "loads mp4 files" do
    expect{
      video = Hash.new
      video['name'] = 'video.mp4'
      video['video'] = @file

      post :create, params: {video: video}
      expect(response).to be_successful
    }.to change(Video, :count).by(1)
  end
end