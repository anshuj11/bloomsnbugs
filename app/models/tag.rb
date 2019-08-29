class Tag < ApplicationRecord
 validates :name, presence: true

 has_many :listing_tags
end

