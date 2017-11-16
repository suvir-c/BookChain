export function getBooks() {
  return new Promise.resolve({
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
export function deleteBook(bookID) {
  // TODO
}
