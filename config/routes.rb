Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/upload' => 'photos#index'
  resources :photos
  resources :videos
  root to: 'photos#index'
end
