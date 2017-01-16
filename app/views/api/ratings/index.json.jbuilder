@ratings.each do |rating|
  json.set! rating.id do
    json.user rating.user
    json.rating rating.rating
    json.snack rating.snack
  end
end
