export function getBooksApi(location) {
  return new Promise.resolve({
    books: [
      {
        name: "test",
        distance: "1",
        author: "wootwoot",
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
export function deleteBookApi(bookID) {
  return new Promise.resolve();
}
