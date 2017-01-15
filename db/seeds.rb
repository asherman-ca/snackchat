# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Alex", password: "password")
User.create(username: "Guest", password: "password")
Snack.create(name: "Fries", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg", description: "Fried Potatoes", user_id: 2)
Snack.create(name: "Garlic Fries", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg", description: "Fried Potatoes", user_id: 2)
Rating.create(user_id: 1, snack_id: 1, rating: 5)
