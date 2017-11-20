import config from "../../config";
export function getNearbyBooksApi(userID) {
  let url = config.JAVA_ENDPOINT + "/demo/getNearbyBooks?userID=" + 4;
  console.log(url);
  return fetch(url) //HARDCODED
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export function deleteBookApi(bookID) {
  return fetch(config.JAVA_ENDPOINT + "/demo/deleteBook?bookID=" + bookID)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export function getBookByBookID(bookID) {
  return fetch(config.JAVA_ENDPOINT + "/demo/getBook?bookID=" + bookID)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export function callCreateBookApi(
  userID,
  author,
  rating,
  title,
  cover,
  longitude,
  latitude
) {
  return fetch(
    config.JAVA_ENDPOINT +
      "/demo/addBook?ownerID=" +
      userID +
      "&author=" +
      author +
      "&rating=" +
      rating +
      "&title=" +
      title +
      "&cover=" +
      cover +
      "&longitude=" +
      0 +
      "&latitude=" +
      0
  ) //HARDCODED long + lat
    .then(data => data.text())
    .then(data => {
      console.log(data);
      return data;
    });
}
