Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:create, :index, :show, :update, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:index, :create, :destroy ]
  end
  root to: "static_pages#root"

end
