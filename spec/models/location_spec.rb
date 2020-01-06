require 'rails_helper'

RSpec.describe Location, type: :model do
  subject(:team_leads_are_assholes){ build(:location)}
  describe "stuff" do
    it 'should have relations be optional' do
      expect(team_leads_are_assholes.valid?).to be true
    end
  end
end
