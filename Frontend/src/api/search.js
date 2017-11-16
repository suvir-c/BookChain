export function callBookSearchApi(bookname) {
  return Promise.resolve({
    books: [
      {
        name: "test",
        distance: "1",
        author: "jimbo",
        rating: "2",
        avatar: "test"
      },
      {
        name: "test",
        distance: "1",
        author: "jimbo",
        rating: "2",
        avatar: "test"
      }
    ]
  });
}

export function callUserSearchApi(username) {
  return Promise.resolve({
    user: [
      {
        email: "search@gmail.com"
      }
    ]
  });
}
