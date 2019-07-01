require 'rails_helper'

RSpec.describe PhotosController, type: :controller do
  before :each do
    @file = fixture_file_upload('files/borat.jpg')
  end

  it 'show photos' do
    photo = Photo.create
    get :index
    expect(assigns(:photos)).to eq([photo])
  end

  it 'should allow photo uploads' do
    photo = Hash.new
    photo['name'] = 'image.jpg'
    photo['image'] = @file
    location = Hash.new
    location['lat'] = '11.111'
    location['lng'] = '22.222'

    post :create, params: {photo: photo, location: location}
    response.should be_success
  end
end

