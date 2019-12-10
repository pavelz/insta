require "image_processing/mini_magick"

class VideoUploader < Shrine
  plugin :determine_mime_type
  plugin :pretty_location
  #plugin :delete_promoted
  plugin :validation_helpers

  Attacher.validate do
    validate_mime_type_inclusion ["video/mp4"]
  end
end

class Video < ApplicationRecord
  has_many :locations
  belongs_to :user
  include VideoUploader::Attachment.new(:video)
end
