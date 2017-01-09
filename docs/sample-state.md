# Sample State

```
{
  session: {
    currentUser: {
      id: '1',
      username: 'asherman'
    },
    errors: []
  },
  Reviews: {
    '1': {
      id: '1',
      title: 'review name',
      userId: '1',
      body: 'great food!',
      comments: {
        '1': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        },
        '2': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        }
      }
    },
    '1': {
      id: '2',
      title: 'review name',
      userId: '1',
      body: 'great food!',
      comments: {
        '1': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        },
        '2': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        }
    },
    '1': {
      id: '3',
      title: 'review name',
      userId: '1',
      body: 'Song lyrics live here',
      comments: {
        '1': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        },
        '2': {
          userId: 2,
          reviewId: 1,
          body: "spot on review!"
        }
    }
  }
```
