json.extract! @listing,:id, :title, :description, :price
json.photoUrl url_for(@listing.photo)
