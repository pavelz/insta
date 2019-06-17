require 'rails_helper'

RSpec.feature "ViewPhotos", type: :feature do
  scenario "visit photos" do 
    visit '/'
    expect(page).to have_text('Insta')
  end
end
