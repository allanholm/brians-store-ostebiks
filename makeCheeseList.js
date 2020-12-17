const cheeseList = document.querySelector(".cheeses__list");

function showAllCheeses(data) {
  console.log(data);
  cheeseList.innerHTML = "";

  data.results.forEach(cheese => {
    var name = document.createElement("a");
    name.innerText = cheese.name;
    name.href = "singleCheese.html?id=" + cheese._id;
    name.className = "cheesesList__listItem";

    cheeseList.append(name);
  });
}

export default showAllCheeses;