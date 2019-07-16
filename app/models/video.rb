require "image_processing/mini_magick"

class VideoUploader < Shrine
  plugin :pretty_location
end

class Video < ApplicationRecord
  validate do
    if (video_data =~ /video\/mp4/).nil?
      errors[:video] << "This file is not a video"
    end
  end
  has_many :locations
  include VideoUploader::Attachment.new(:video)
end
