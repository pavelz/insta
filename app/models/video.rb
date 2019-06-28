require "image_processing/mini_magick"

class VideoUploader < Shrine
  plugin :pretty_location
end

class Video < ApplicationRecord
  has_many :locations
  include ImageUploader::Attachment.new(:video)
end
