@likes.each do |like|
  json.set! like.id do
    json.extract! like, :listing_id, :user_id
  end
end