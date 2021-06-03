class Restaurant < ApplicationRecord
  belongs_to :category

  has_many :product_categories
  has_many :orders
  has_many :reviews, dependent: :destroy

  has_one_attached :image

  # Campos obrigatórios
  validates :name, :delivery_tax, :city, :neighborhood, :street, :number, presence: true

  def average_review
    sum = self.reviews.to_a.sum(&:rate)
    sum = sum / self.reviews.count
    '%.1f' % sum
  end
end
