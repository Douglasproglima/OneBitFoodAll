class OrderProduct < ApplicationRecord
  belongs_to :order
  belongs_to :product

    #Campo obrigatório
    validates :quantity, presence: true
end
