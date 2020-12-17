import { urlGetKey } from "./urlHandler.js";
import createSingleCheese from "./makeSingleCheese.js";

fetch('https://osteapi-allanhs.herokuapp.com/api/v1/cheeses/' + urlGetKey("id")) 
    .then(response => response.json())
    .then(data => createSingleCheese(data));
