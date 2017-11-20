export function callLoginApi(email, password) {
  return fetch('http://localhost:8080/demo/getUser?username=' + email + '&password=' + password)
    .then(data => data.json())
    .then((data) => {
      console.log(data);
      return data;
    })
}

export function callRegisterApi(email, password, longitude, latitude) {
  return fetch('http://localhost:8080/demo/addUser?username=' + email + '&password=' + password
      + '&longitude=0&latitude=0')  //HARDCODED
    .then(data => data.json())
    .then((data) => {
      console.log(data);
      return data;
    })
}
export function callCreateBookApi(userID, book) {
  return Promise.resolve();
}
