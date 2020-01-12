require 'rails_helper'
RSpec.describe HardWorker, type: :worker do
  it "should do something" do
    subject.perform()
  end
end
