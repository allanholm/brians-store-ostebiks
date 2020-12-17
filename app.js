import fetchForList from "./fetchForList.js";
import knapFunktion from "./next-prev-list.js";
import { setURL, urlGetKey } from "./urlHandler.js";

let offset = 0;

let newURL = `index.html?offset=${offset}`;
setURL(newURL);

fetchForList(urlGetKey("offset"));

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", knapFunktion));