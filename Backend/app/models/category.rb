class Category < ApplicationRecord
  has_many :restaurants
  has_one_attached :image

  #Campo obrigatório
  validates :title, presence: true
end
