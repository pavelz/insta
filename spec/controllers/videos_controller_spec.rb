require 'rails_helper'

RSpec.describe VideosController, type: :controller do
  before :each do
    @file = fixture_file_upload('files/video.mp4')
    @non_video_file = fixture_file_upload('files/video.mp4')
    user = User.create(email: "hello@hello.com", password:"asassasadddasd")
    sign_in(user)
  end

  it "loads mp4 files" do
    expect{
      video = Hash.new
      video['name'] = 'video.mp4'
      video['video'] = @file

      post :create, params: {video: video}
      binding.pry
      response.should be_success
    }.to change(Video, :count).by(1)
  end
end