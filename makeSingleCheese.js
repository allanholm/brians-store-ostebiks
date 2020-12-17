function createSingleCheese(cheese){
  const cheeseContainer = document.querySelector("#cheeseContainer");

  let cheeseName = document.createElement("h1");
  cheeseName.innerText = cheese.name;
  cheeseName.className = "cheeseName";

  let cheeseBrand = document.createElement("p");
  cheeseBrand.innerText = "Brand: " + cheese.brand;

  let cheesePrice = document.createElement("p");
  cheesePrice.innerText = "Price: " + cheese.price.$numberDecimal + " ,-";

  let cheeseWeight = document.createElement("p");
  cheeseWeight.innerText = "Weight: " + cheese.weight + " gram";

  let cheeseStrength = document.createElement("p");
  cheeseStrength.innerText = "Strength: " + cheese.strength;

  cheeseContainer.append(cheeseName, cheeseBrand, cheesePrice, cheeseWeight, cheeseStrength);
}

export default createSingleCheese;