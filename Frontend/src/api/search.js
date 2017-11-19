// export function callBookSearchApi(bookname) {
//   return Promise.resolve({
//     books: [
//       {
//         name: "test",
//         distance: "1",
//         author: "jimbo",
//         rating: "2",
//         avatar: "test"
//       },
//       {
//         name: "test",
//         distance: "1",
//         author: "jimbo",
//         rating: "2",
//         avatar: "test"
//       }
//     ]
//   });
// }
export function callBookSearchApi(bookname, userID) {
  return fetch('http://localhost:8080/demo/searchBooks?title=jimbo&userID=1')
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
  }

export function callUserSearchApi(name) {
  return fetch('http://localhost:8080/demo/searchUsers?name=Wei')
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
  }

// export function callUserSearchApi(username) {
//   return Promise.resolve({
//     user: [
//       {
//         email: "search@gmail.com"
//       }
//     ]
//   });
// }
