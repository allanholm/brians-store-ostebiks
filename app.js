import fetchForList from "./fetchForList.js";
import knapFunktion from "./next-prev-list.js";
import { setURL, urlGetKey } from "./urlHandler.js";

let offset = 0;

let newURL = `index.html?offset=${offset}`;
setURL(newURL);

fetchForList(urlGetKey("offset"));

let arrows = document.querySelectorAll("i");
arrows.forEach(arrow => arrow.addEventListener("click", knapFunktion));










// var cheese = document.createElement("div");
// var brand = document.createElement("p");
// brand.innerText = data.results[i].brand;
// var name = document.createElement("p");
// name.innerText = data.results[i].name;
// var price = document.createElement("p");
// price.innerText = data.results[i].price.$numberDecimal + " kroner";
// var weight = document.createElement("p");
// weight.innerText = data.results[i].weight + " gram";
// var strength = document.createElement("p");
// strength.innerText = data.results[i].strength;