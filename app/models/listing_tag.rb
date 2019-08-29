class ListingTag < ApplicationRecord
    validates :tag_id, :listing_id, presence: true
end
