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
