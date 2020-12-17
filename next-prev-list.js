import fetchForList from "./fetchForList.js";
import { setURL, urlGetKey } from "./urlHandler.js";

function knapFunktion(e) {
  
  let offset =  parseInt(urlGetKey("offset"));
  

  if (e.target.id === "next") {
    if (offset < 10) {
      offset = offset + 5;
    } else {
      offset = 0;
    }
  } else {
    if (offset == 0) {
      offset = 10;
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