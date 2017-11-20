import config from "../../config";
export function getUserById(userID) {
  let url = config.JAVA_ENDPOINT + "/demo/getUserByUserID?userID=" + userID;
  console.log(url);
  return fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      return data;
    });
}
