// import new_arrivals from "./json/new_goods.json";
// import cardsCreator from "./card_creator";

// const bestSeller = document.querySelector(".best-seller__items");
// let products = new_arrivals.best_sellers;

// cardsCreator(products, bestSeller);

import goods from "./json/goods.json";
import cardsCreator from "./card_creator";

const bestSeller = document.querySelector(".best-seller__items");
let products = goods.goods
  .map((item) => {
    console.log(item);
    if (item.status.includes("hot") && !item.type.includes("accessories")) {
      return item;
    } else return;
  })
  .filter((item) => item !== null && item !== undefined && item !== "");

cardsCreator(products, bestSeller, "hot");
