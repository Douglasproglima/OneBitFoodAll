class Api::V1::AvailableCitiesController < Api::V1::ApiController
  def index
    @available_cities = Restaurant.all.map { |r| r.city }.uniq
  end
end
