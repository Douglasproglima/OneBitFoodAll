class Api::V1::RestaurantsController < Api::V1::ApiController
  before_action :set_restaurant, only: :show
  
  def index
    @restaurants = Restaurant.friendly.all
    filter_by_query if params[:q]
    filter_by_city if params[:city]
    filter_by_category if(params[:category])
  end

  def show
  end

  private

  def set_restaurant
    @restaurant = Restaurant.friendly.find(params[:id])
  end

  # gem ransack: Auxilia na pesquisa de textos
  def filter_by_query
    @restaurants = @restaurants.ransack(name_or_description_cont: params[:q]).result
  end

  def filter_by_city
    @restaurants = @restaurants.where(city: params[:city])
  end

  def filter_by_category
    @restaurants = @restaurants.select do |r|
      r.category.title == params[:category]
    end
  end
end
