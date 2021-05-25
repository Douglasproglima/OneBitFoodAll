Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :categories, only: [:index]
      resources :restaurants, only: [:index, :show]
      resources :orders, only: [:create, :show]
      resources :available_cities, only: [:index]
    end
  end
end

#Rails.application.routes.draw do
#  scope '/api/v1', defaults: { format: :json } do
#    resources :categories, only: [:index]
#    resources :restaurants, only: [:index, :show]
#    resources :orders, only: [:create, :show]
#    resources :available_cities, only: [:index]
#  end
#end