require 'rails_helper'

RSpec.describe Location, type: :model do
  it 'should have relations be optional' do
    location  = build(:location)
    expect(location.valid?).to be true
  end
end
