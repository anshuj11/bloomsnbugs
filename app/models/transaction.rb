class Transaction < ApplicationRecord
validates :amount, :user_id, presence: true
  
  belongs_to :user
  has_many :transaction_listings
end
