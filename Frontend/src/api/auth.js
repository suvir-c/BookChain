import config from "../../config";

export function callLoginApi(email, password) {
  return fetch(
    config.JAVA_ENDPOINT +
      "/demo/getUser?username=" +
      email +
      "&password=" +
      password
  )
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export function callRegisterApi(email, password, name, longitude, latitude) {
  let url =
    config.JAVA_ENDPOINT +
    "/demo/addUser?username=" +
    email +
    "&name=" +
    name +
    "&password=" +
    password +
    "&longitude=0&latitude=0";
  console.log(url);
  return fetch(url) //HARDCODED
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}
export function callCreateBookApi(userID, book) {
  return Promise.resolve();
}
