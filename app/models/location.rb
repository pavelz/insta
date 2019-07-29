class Location < ApplicationRecord
  belongs_to :photo
  belongs_to :video # wrong
end
