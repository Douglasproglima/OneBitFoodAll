#require 'api_constraints'
Rails.application.routes.draw do
  scope '/api/v1/', defaults: { format: :json } do
    resources :categories, only: [:index]
    resources :restaurants, only: [:index, :show]
    resources :orders, only: [:create, :show]
    resources :avaliable_cities, only: [:index]
  end
end