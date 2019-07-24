require "image_processing/mini_magick"

class ImageUploader < Shrine
  include ImageProcessing::MiniMagick
  plugin :determine_mime_type
  plugin :processing
  plugin :versions
  plugin :pretty_location
  plugin :delete_promoted
  plugin :delete_raw
  plugin :recache
  plugin :store_dimensions
  plugin :validation_helpers

  Attacher.validate do
    validate_mime_type_inclusion ['image/jpeg', 'image/png']
  end

  process(:store) do |io, context|
    versions = { original: io }

    io.download do |original|
      pipeline = ImageProcessing::MiniMagick.source(original)

      versions[:large] = pipeline.resize_to_limit!(800,800)
      versions[:medium] = pipeline.resize_to_limit!(500,500)
      versions[:small] = pipeline.resize_to_limit!(100,100)
    end
    versions
  end
end

class Photo < ApplicationRecord
  has_many :locations
  belongs_to :user
  include ImageUploader::Attachment.new(:image)
end
