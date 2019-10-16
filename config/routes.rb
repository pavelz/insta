Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #devise_for :users, controllers: {
    #sessions: 'users/sessions'
  #}

  get '/upload' => 'photos#index'
  resources :photos
  resources :videos
  get '/alive' => 'utility#alive'
  root to: 'photos#index'
end
