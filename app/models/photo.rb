require "image_processing/mini_magick"

class ImageUploader < Shrine
  plugin :processing
  plugin :versions
  plugin :pretty_location

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
