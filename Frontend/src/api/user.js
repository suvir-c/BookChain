export function getUserById(userID) {
  return new Promise.resolve({
    user: [
      {
        name: "test user",
        books: [
          {
            name: "test",
            distance: "1",
            author: "wootwoot",
            rating: "2",
            avatar: "test"
          }
        ]
      }
    ]
  });
}
