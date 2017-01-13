export const addSnack = (snack) => {
  return $.ajax({
    method: 'POST',
    url: '/api/snack',
    data: {snack}
  });
};

export const getSnacks = (snack) => {
  return $.ajax({
    method: 'GET',
    url: '/api/snack'
  });
};
