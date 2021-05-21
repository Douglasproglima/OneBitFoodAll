class Restaurant < ApplicationRecord
  belongs_to :category

  has_many :product_categories
  has_many :orders

  has_one_attached :image

  # Campos obrigatórios
  validates :name, :delivery_tax, :city, :neighborhood, :street, :number, presence: true
end
