class Api::V1::RestaurantsController < Api::V1::ApiController
  before_action :set_restaurant, only: :show
  
  def index
    @restaurants = Restaurant.all
  end

  def show
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end
