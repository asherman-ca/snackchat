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

export const deleteSnack = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/snacks/${id}`,
  })
);

export const fetchUserSnacks = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/snacks',
    data: {id}
  })
);
