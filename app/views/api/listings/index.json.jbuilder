@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :description, :price
    json.photoUrl url_for(listing.photo)
  end
end
