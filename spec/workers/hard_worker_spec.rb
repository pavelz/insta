require 'rails_helper'
RSpec.describe HardWorker, type: :worker do
  describe "Hard worker should" do
    it "should do something" do
      Location.create!({lng: 30.308963, lat: 59.985897})
      subject.perform(Location.first.id)
      expect(Location.first.address).not_to be_blank
    end
  end
end
