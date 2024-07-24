// New Arrivals

import goods from "./json/goods.json";
import cardsCreator from "./card_creator";

const newArrivals = document.querySelector(".arrivals__cards");
let products = goods.goods
  .map((item) => {
    if (item.status.includes("new") && !item.type.includes("accessories")) {
      return item;
    } else return;
  })
  .filter((item) => item !== null && item !== undefined && item !== "");

cardsCreator(products, newArrivals, "new");
