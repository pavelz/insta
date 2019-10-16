class Location < ApplicationRecord
  belongs_to :photo, optional: true
  belongs_to :video, optional: true
end
