export const fetchRatings = () => (
  $.ajax({
    method: 'GET',
    url: '/api/ratings'
  })
);

export const addRating = rating => (
  $.ajax({
    method: 'POST',
    url: '/api/ratings',
    data: {rating}
  })
);

export const fetchSnackRatings = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/ratings',
    data: {id}
  })
);
