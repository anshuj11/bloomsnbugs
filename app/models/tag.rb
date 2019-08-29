class Tag < ApplicationRecord
 validates :name

 has_many :listing_tags
end

