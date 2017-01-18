@snacks.each do |snack|
  json.set! snack.id do
    json.extract! snack, :id, :name, :picture_url, :user_id, :description
  end
end
