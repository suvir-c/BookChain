const BOOK_ENDPOINT = "http://openlibrary.org/search.json";

function getBookFromTerm(term) {
  let url = BOOK_ENDPOINT + "?q=" + +encodeURIComponent(term);

  return fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

getBookFromTerm("cracking the coding");
