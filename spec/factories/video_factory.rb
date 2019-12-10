FactoryBot.define do
  factory :video do
    video { File.open("spec/fixtures/files/video.mp4") }
  end
end