import fetchForList from "./fetchForList.js";
import { setURL, urlGetKey } from "./urlHandler.js";

function knapFunktion(e) {
  fetch(`https://osteapi-allanhs.herokuapp.com/api/v1/cheeses`)
    .then(response => response.json())
    .then(data => knapFunktionDelTo(e, (data.count % 5) * 5)); 
    //count modulos 5 giver hvor mange gange 5 går op i vores count, 
    //dette ganger jeg så med 5 for at vi ikke kan gå til en side der ikke findes. 
}

function knapFunktionDelTo(e, count) {
  let offset =  parseInt(urlGetKey("offset"));
  

  if (e.target.id === "next") {
    if (offset < count ) {
      offset = offset + 5;
    } else {
      offset = 0;
    }
  } else {
    if (offset == 0) {
      offset = count;
    } else {
      offset = offset - 5;
    }
  }

  let newURL = `index.html?offset=${offset}`;
  setURL(newURL);

  fetchForList(urlGetKey("offset"));
  return offset;
}

export default knapFunktion;