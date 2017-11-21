const BOOK_ENDPOINT = "http://openlibrary.org/search.json";

export function getCoverForBook(term) {
  let url = BOOK_ENDPOINT + "?q=" + encodeURIComponent(term);

  return fetch(url, {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => {
      let id = data.docs[0].cover_i;
      console.log(data.docs);
      return "http://covers.openlibrary.org/b/id/" + id + "-M.jpg";
    })
    .catch(() => {
      return "";
    });
}
