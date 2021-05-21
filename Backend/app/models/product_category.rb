class ProductCategory < ApplicationRecord
  belongs_to :restaurant
  has_many :products

  #Campo obrigatório
  validates :title, presence: true
end
