require "image_processing/mini_magick"

class ImageUploader < Shrine
  include ImageProcessing::MiniMagick
  plugin :determine_mime_type
  plugin :derivatives
  plugin :pretty_location

  plugin :store_dimensions
  plugin :validation_helpers

  Attacher.validate do
    validate_mime_type_inclusion ['image/jpeg', 'image/png']
  end

  Attacher.derivatives do |original|
    magick = ImageProcessing::MiniMagick.source(original)
    {
        large: magick.resize_to_limit!(800,800),
        medium: magick.resize_to_limit!(500, 500),
        small: magick.resize_to_limit!(300, 300)
    }
  end
end

class Photo < ApplicationRecord
  has_many :locations
  belongs_to :user, optional: true
  include ImageUploader::Attachment.new(:image)
end
