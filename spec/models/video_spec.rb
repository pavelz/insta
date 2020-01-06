require 'rails_helper'

RSpec.describe Video, type: :model do
  before :each do
  end

  it "should check file mime type" do
    expect(subject).to be_valid
  end
end
