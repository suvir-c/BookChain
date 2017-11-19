export function callLoginApi(email, pass) {
  console.log("butwait");
  return Promise.resolve({
    user: {
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
  });
}

export function callRegisterApi(email, pass) {
  return Promise.resolve({
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
export function callCreateBookApi(userID, book) {
  return Promise.resolve();
}
