require 'rails_helper'

RSpec.describe PhotosController, type: :controller do
  before :each do
    @file = fixture_file_upload('files/borat.jpg')
  end

  it 'show photos' do
    user = User.create(email: "hello@hello.com", password:"asassasadddasd")
    sign_in(user)
    photo = Photo.create(user: user)
    get :index
    expect(assigns(:photos).to_a).to eq([photo])
  end

  it 'should allow photo uploads' do
    expect {
      user = User.create(email: "hello@hello.com", password:"asassasadddasd")
      sign_in(user)
      photo = Hash.new
      photo['name'] = 'image.jpg'
      photo['image'] = @file

      location = Hash.new
      location['lat'] = '11.111'
      location['lng'] = '22.222'

      post :create, params: {photo: photo, location: location}
      expect(response).to be_successful
      expect(Photo.last.image_derivatives).not_to be == {} # after shrine 3.1 have to make sure image variants are generated
    }.to change(Photo, :count).by(1)
  end
end

