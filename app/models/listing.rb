class Listing < ApplicationRecord
  validates :title, :description, :price, presence: true
  has_many :listing_tags
  has_many :reviews
  has_many :transactions

  has_one_attached :photo
end