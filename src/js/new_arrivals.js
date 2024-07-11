// New Arrivals

import new_arrivals from "./json/new_goods.json";
import cardsCreator from "./card_creator";

const newArrivals = document.querySelector(".arrivals__cards");
let products = new_arrivals.new_products;

cardsCreator(products, newArrivals);
