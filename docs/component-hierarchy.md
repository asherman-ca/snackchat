## Component Hierarchy

**SplashContainer**
 -Navbar

  **AuthContainer**
   -Login
   -Logout

**AppContainer**
 -Navbar

  **RatingsIndex**
    -RatingsIndex

  **NewSnackContainer**
    -SnackForm  

  **ProfileContainer**
   -SnacksIndex
    -SnackIndexItem

  **SnacksIndexContainer**
   -SnacksIndex  
    -SnackIndexItem

  **SnackShowContainer**
   -SnackRatings
   -AddSnackRating

## Routes

|Path   | Component   |
|-------|-------------|
| "/login" | "SessionFormContainer" |
| "/signup" | "SessionFormContainer" |
| "/browse" | "AppContainer" |
| "/feed" | "AppContainer" |
| "/ratings" | "RatingsIndexContainer" |
| "/add" | "SnackFormContainer" |
| "/profile/:userId" | "SnacksIndexContainer" |
| "/snacks/:snackId" | "SnackShowContainer" |
