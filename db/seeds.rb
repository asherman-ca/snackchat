# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Alex", password: "password")
User.create(username: "Guest", password: "password")
User.create(username: "Tom", password: "password")
User.create(username: "David", password: "password")
User.create(username: "Eileen", password: "password")
User.create(username: "Nikko", password: "password")

Snack.create(name: "Garlic Fries", picture_url: "http://farm3.static.flickr.com/2763/4069403884_519943cda5.jpg", description: "Super Duper", user_id: 1)
Snack.create(name: "Pizza", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484623643/_0jpjeqtsyg-carissa-gan_jw7dcq.jpg", description: "Pizzetta", user_id: 2)
Snack.create(name: "Risotto", picture_url: "http://res.cloudinary.com/devwor0u0/image/upload/v1484623524/risotto_k66fea.jpg", description: "Don Pablo's", user_id: 3)
Snack.create(name: "Short Ribs", picture_url: "http://ot-foodspotting-production.s3.amazonaws.com/reviews/5725837/thumb_600.jpg?1454076792?1484869003", description: "Roka Akor", user_id: 2)
Snack.create(name: "Burrito", picture_url: "https://overeatingisunderrated.files.wordpress.com/2014/02/20140203-230037.jpg", description: "El Farlito", user_id: 4)
Snack.create(name: "Masala Dosa", picture_url: "https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-superJumbo.jpg", description: "Dosa", user_id: 2)
Snack.create(name: "Firecracker Beef", picture_url: "http://drakepost.com/wp-content/uploads/2010/12/osha-thai.jpg", description: "Osha", user_id: 5)
Snack.create(name: "Garlic Soy Wings", picture_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKySBoqBQV2q2em2KBcNID1IhzQ8ebqLs2yPpyxsoIOPXLgGrFCg", description: "ZZAN", user_id: 2)
Snack.create(name: "SouthWest Burger", picture_url: "http://traffic411.com/wp-content/uploads/2012/10/umami_orig.jpg", description: "Umami Burger", user_id: 6)


Rating.create(user_id: 1, snack_id: 1, rating: 5)
Rating.create(user_id: 1, snack_id: 2, rating: 5)
Rating.create(user_id: 2, snack_id: 3, rating: 4)
Rating.create(user_id: 2, snack_id: 4, rating: 4)
Rating.create(user_id: 3, snack_id: 5, rating: 2)
Rating.create(user_id: 3, snack_id: 6, rating: 3)
Rating.create(user_id: 4, snack_id: 7, rating: 5)
Rating.create(user_id: 4, snack_id: 8, rating: 4)
Rating.create(user_id: 5, snack_id: 1, rating: 2)
Rating.create(user_id: 5, snack_id: 2, rating: 5)
Rating.create(user_id: 6, snack_id: 3, rating: 5)
Rating.create(user_id: 6, snack_id: 4, rating: 3)
