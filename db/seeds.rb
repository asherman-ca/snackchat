# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Alex", password: "password")
User.create(username: "Guest", password: "password")

Snack.create(name: "Fries", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg", description: "Super Duper", user_id: 2)
Snack.create(name: "Pizza", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484623643/_0jpjeqtsyg-carissa-gan_jw7dcq.jpg", description: "Pizza Kitchen", user_id: 1)
Snack.create(name: "Risotto", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484623524/risotto_k66fea.jpg", description: "Italian Spot", user_id: 1)
Snack.create(name: "Garlic Fries", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg", description: "Donalds", user_id: 2)
Snack.create(name: "Other Fries", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg", description: "Potatoe Shop", user_id: 1)

Rating.create(user_id: 1, snack_id: 1, rating: 5)
Rating.create(user_id: 1, snack_id: 2, rating: 5)
Rating.create(user_id: 2, snack_id: 1, rating: 4)
Rating.create(user_id: 2, snack_id: 2, rating: 4)
