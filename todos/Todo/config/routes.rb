Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :to_dos, except: [:edit, :new]
  end
end
