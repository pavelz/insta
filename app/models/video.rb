require "image_processing/mini_magick"

class VideoUploader < Shrine
  plugin :pretty_location
end

class Video < ApplicationRecord
  has_many :locations
  include VideoUploader::Attachment.new(:video)
end
