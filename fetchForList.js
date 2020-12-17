import showAllCheeses from "./makeCheeseList.js";

function fetchForList(offset) {
  fetch(`https://osteapi-allanhs.herokuapp.com/api/v1/cheeses?offset=${offset}`)
    .then(response => response.json())
    .then(data => showAllCheeses(data));
}

export default fetchForList;