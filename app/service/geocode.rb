
class Geocode
  def self.resolve(key, location_id)
    location = Location.find(location_id)
    response = Faraday.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{location.lat},#{location.lng}&key=#{key}")
    rez = JSON.parse(response.body)

    address = rez['results'][0]['formatted_address'] rescue "Unknown location"
    location.address = address
    location.save
  end
end
