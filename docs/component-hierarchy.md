## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**CommentsContainer**
 - CommendsHeader
  * CommentIndex

**ReviewsContainer**
 - ReviewsHeader
  + CommentIndex

**SearchResultsContainer**
 - Search
 - ReviewIndex

**CommentsIndex**
 - CommentIndexItem

**ReviewsIndex**
 - ReviewIndexItem

**ReviewItems**
 - CommentIndex

**NewCommentContainer**
 - NewComment
  - NewCommentButton

**NewReviewContainer**
 - NewReview
  - NewReviewButton

**Search**

**ReviewSearch**
 + AutoSearch
 * AutoSearchResults


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
