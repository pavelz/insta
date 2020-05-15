require "image_processing/mini_magick"

class VideoUploader < Shrine
  plugin :determine_mime_type
  plugin :pretty_location
  plugin :validation_helpers
  plugin :derivatives

  Attacher.validate do
    validate_mime_type_inclusion ["video/mp4","video/quicktime"]
  end

  Attacher.derivatives do |original|
    screenshot = Tempfile.new ["screenshot", ".jpeg"]
    movie = FFMPEG::Movie.new(original.path)
    movie.screenshot(screenshot.path)
    {screenshot: screenshot}
  end
end

class Video < ApplicationRecord
  has_many :locations
  belongs_to :user, optional: true
  before_save do
    if valid?
    video_derivatives!
    end
  end
  include VideoUploader::Attachment.new(:video)
end
