json.set! rating.id do
  json.user_name rating.user.username
  json.user_id rating.user.id
  json.rating rating.rating
  json.snack_name rating.snack.name
  json.snack_desc rating.snack.description
  json.snack_id rating.snack.id
  json.snack_url rating.snack.picture_url
end
