@snacks.each do |snack|
  json.set! snack.id do
      json.id snack.id
      json.name snack.name
      json.picture_url snack.picture_url
      json.description snack.description
      json.average_rating snack.average_rating
      json.user_id snack.user_id
      json.user_name snack.user.username
  end
end
