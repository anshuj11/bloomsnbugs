class Like < ApplicationRecord
    validates :listing_id, :user_id, presence: true

    belongs_to :user
    belongs_to :listing
end
