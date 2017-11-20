import config from "../../config";

export function callBookSearchApi(title, userID) {
  return fetch(
    config.JAVA_ENDPOINT + "/demo/searchBooks?title=" + title + "&userID=" + 1
  ) //HARDCODED
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export function callUserSearchApi(name) {
  return fetch(config.JAVA_ENDPOINT + "/demo/searchUsers?name=" + name)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}
