import new_arrivals from "./json/new_goods.json";
import cardsCreator from "./card_creator";

const bestSeller = document.querySelector(".best-seller__items");
let products = new_arrivals.best_sellers;

cardsCreator(products, bestSeller);
