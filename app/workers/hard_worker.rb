class HardWorker
  include Sidekiq::Worker

  def perform(*args)
    key = Rails.application.credentials.development[:GOOGLE_API_KEY]
    location_name = Geocode.resolve(key, args[0])
  end
end
