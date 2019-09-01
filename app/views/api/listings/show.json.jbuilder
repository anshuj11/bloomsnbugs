json.extract! @listing, :title, :description, :price
json.photoUrl url_for(@listing.photo)
