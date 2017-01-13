export const addSnack = (snack) => {
  return $.ajax({
    method: 'POST',
    url: '/api/snacks',
    data: {snack}
  });
};
