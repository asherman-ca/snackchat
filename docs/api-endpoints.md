# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Snacks

- `GET /api/snacks`
  - if passed params[:id], returns user.find[:id].snacks
- `GET /api/snacks/:id`
- `POST /api/snacks`
- `DELETE /api/snacks/:id`

### Ratings

- `GET /api/ratings`
  - if passed params[:id], returns snack.find[:id].ratings
- `POST /api/ratings`
