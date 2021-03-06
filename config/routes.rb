Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :snacks, only: [:create, :show, :index, :destroy]
    resources :ratings, only: [:index, :show, :create]
  end

  root "static_pages#root"
end
