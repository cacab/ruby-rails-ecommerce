Rails.application.routes.draw do

  get 'app', to: 'spa#index'
  get 'app/*path', to: 'spa#index'


  get "about", to: "about#index"
  root to: "main#index"

  resources :todo_lists
  resources :secondpage
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
