export const fetchSnacks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/snacks'
  })
);

export const fetchSnack = id => (
  $.ajax({
    method: 'GET',
    url: `/api/snacks/${id}`
  })
);

export const addSnack = snack => (
  $.ajax({
    method: 'POST',
    url: '/api/snacks',
    data: {snack}
  })
);
