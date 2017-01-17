@ratings.each do |rating|
  json.set! rating.id do
    json.user_id rating.user.id
    json.rating rating.rating
    json.snack_id rating.snack.id
  end
end
