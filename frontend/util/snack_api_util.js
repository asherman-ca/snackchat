export const addSnack = (snack) => {
  return $.ajax({
    method: 'POST',
    url: '/api/snack',
    data: {snack}
  });
};
