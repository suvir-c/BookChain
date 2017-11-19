export function callBookSearchApi(title, userID) {
  return fetch('http://localhost:8080/demo/searchBooks?title='+title+'&userID='+1)  //HARDCODED
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
  }

export function callUserSearchApi(name) {
  return fetch('http://localhost:8080/demo/searchUsers?name='+name)
    .then(data => data.json())
    .then((data => {
      console.log(data);
      return data;
    }))
  }
