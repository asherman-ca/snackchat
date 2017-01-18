json.partial! "api/snacks/snack", snack: @snack
# json.extract! snack, :name, :description, :picture_url, :id
# json.extract! @snack, :name, :description, :picture_url, :id
#   json.set! :ratings do
#     @snack.ratings.each do |rating|
#       json.rating rating.rating
#       json.user_name = rating.user.username
#       json.user_id = rating.user.id
#     end
#   end
