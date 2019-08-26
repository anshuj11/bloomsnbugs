@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description, :price
  end
end
