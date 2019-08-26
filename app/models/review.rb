class Review < ApplicationRecord
validates :listing_id, :user_id, :body  presence: true

  belongs_to :user
  belongs_to :listing
end
