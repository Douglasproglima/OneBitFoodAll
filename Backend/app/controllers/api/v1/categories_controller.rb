class Api::V1::CategoriesController < Api::V1::ApiController
  def index
    @categories = Category.all.order(:title)
    #render json: @categories
  end
end
