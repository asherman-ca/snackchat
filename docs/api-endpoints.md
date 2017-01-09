# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`
- `GET /api/users/:id/reviews`
  - for profile pages

### Session

- `POST /api/session`
- `DELETE /api/session`

### Reviews

- `GET /api/reviews`
  - Reviews index/search
- `POST /api/reviews`
- `GET /api/reviews/:id`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /api/reviews/:id/comments`
  - index of all comments for a review
- `GET /api/reviews/:id/ratings`
  - index of all ratings for a review

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`
