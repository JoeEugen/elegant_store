let createOrderCards = (item) => {
  let orderList = document.querySelector(".cart__products");

  let orderItem = document.createElement("div");
  let orderInfo = document.createElement("div");
  let orderImg = document.createElement("img");
  let orderDesc = document.createElement("div");
  let orderTitle = document.createElement("h4");
  let orderText = document.createElement("span");
  let orderCount = document.createElement("div");
  let orderMinus = document.createElement("img");
  let orderNumber = document.createElement("span");
  let orderPlus = document.createElement("img");
  let orderTotal = document.createElement("div");
  let orderPrice = document.createElement("div");
  let orderRemove = document.createElement("button");

  orderItem.classList.add("order__item");
  orderInfo.classList.add("order__info");
  orderImg.classList.add("order__img");
  orderDesc.classList.add("order__desc");
  orderTitle.classList.add("order__title");
  orderText.classList.add("order__text");
  orderCount.classList.add("order__count");
  orderMinus.classList.add("order__minus", "order__count-button");
  orderNumber.classList.add("order__number");
  orderPlus.classList.add("order__plus", "order__count-button");
  orderTotal.classList.add("order__total");
  orderPrice.classList.add("order__price");
  orderRemove.classList.add("order__remove");

  orderImg.src = require("./../images/goods/" + item.image_url);
  orderImg.srcset = "./../images/goods/" + item.image_hd;
  orderTitle.textContent = item.name;
  orderText.textContent = "color: " + item.color;
  orderMinus.src = require("./../images/icons/minus.svg");
  orderPlus.src = require("./../images/icons/plus.svg");
  orderNumber.textContent = item.count;
  orderPrice.textContent = "$ " + itemPrice(item.count, item.price);
  orderRemove.textContent = "Remove";
  orderRemove.dataset.id = item.id;
  orderMinus.dataset.id = item.id;
  orderPlus.dataset.id = item.id;

  orderList.append(orderItem);
  orderItem.append(orderInfo, orderTotal);
  orderInfo.append(orderImg, orderDesc);
  orderDesc.append(orderTitle, orderText, orderCount);
  orderCount.append(orderMinus, orderNumber, orderPlus);
  orderTotal.append(orderPrice, orderRemove);
};

let itemPrice = (price, count) => Math.floor(price * count);

export default createOrderCards;
export { itemPrice };
