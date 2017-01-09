## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**DishesContainer**
 - DishHeader
  + DishIndex

**NewDishContainer**
 - NewDish
  - NewDishButton

**ReviewsContainer**
 - ReviewsHeader
  + CommentIndex

**ReviewsIndex**
 - ReviewIndexItem

**ReviewItems**
 - CommentIndex

**NewReviewContainer**
 - NewReview
  - NewReviewButton

**PofileContainer**
 - ReviewIndex


**ProfileItem**  



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/comment/:commentId" | "CommentsContainer" |
| "/home/review/:reviewId" | "ReviewsContainer" |
| "/home/search-results" | "SearchResultsContainer" |
| "/new-review" | "NewReviewContainer" |
| "/new-comment" | "NewCommentContainer" |
| "/search" | "Search" |
