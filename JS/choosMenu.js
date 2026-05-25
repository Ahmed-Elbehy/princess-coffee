function ChoseMenue() {
  // events elements from HTML
  const hotDrink = document.getElementById("hot-drink");
  const snacks = document.getElementById("snacks");
  const drinksMenu = document.getElementById("hot-drinks-menu");
  const snacksMenu = document.getElementById("snacks-menu");

  //   Buttons actions
  hotDrink.addEventListener("click", () => {
    drinksMenu.classList.remove("hidden");
    snacksMenu.classList.add("hidden");
    hotDrink.classList.add("selector");
    snacks.classList.remove("selector");
  });

  snacks.addEventListener("click", () => {
    drinksMenu.classList.add("hidden");
    snacksMenu.classList.remove("hidden");
    hotDrink.classList.remove("selector");
    snacks.classList.add("selector");
  });
  //   console.log(hotDrink, snacks, drinksMenu, snacksMenu);
}
export default ChoseMenue;
