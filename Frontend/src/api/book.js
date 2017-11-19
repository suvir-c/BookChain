export function getNearbyBooksApi(userID) {
  return fetch('http://localhost:8080/demo/getNearbyBooks?userID=' + 4) //HARDCODED
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
}

export function deleteBookApi(bookID) {
  return fetch('http://localhost:8080/demo/deleteBook?bookID=' + bookID)
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
}
