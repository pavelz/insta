class HardWorker
  include Sidekiq::Worker

  def perform(*args)
    key = Rails.application.credentials[:google][:apikey]
    location_name = Geocode.resolve(key, args[0])
  end
end
