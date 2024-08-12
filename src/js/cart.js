import goods from "./json/goods.json";
import icon from "./../images/icons/check.svg";
import createOrderCards from "./order_creator";
import { itemPrice } from "./order_creator";

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".header__cart-btn");
  const cart = document.querySelector(".cart");
  const body = document.querySelector("body");
  const closeBtn = document.querySelector(".cart__close-btn");
  const bgFilter = document.querySelector(".bg-filter");
  const swiperPagination = document.querySelector(".swiper-pagination");

  const orderList = document.querySelector(".cart__products");
  const headerCartCount = document.querySelector(".header__count");
  const total = document.querySelector(".cart__total-price");

  let allProducts = goods.goods;
  let cartProducts = {};

  const openCart = () => {
    cart.style.display = "flex";
    body.style.overflow = "hidden";
    bgFilter.style.display = "block";
    swiperPagination.style.display = "none";
    renderCart();
  };

  const closeCart = () => {
    cart.style.display = "none";
    body.style.overflow = "auto";
    bgFilter.style.display = "none";
    orderList.innerHTML = "";
    swiperPagination.style.display = "flex";
    updateButtons();
  };

  const headerCount = () => {
    if (Object.keys(cartProducts).length > 0) {
      headerCartCount.style.display = "flex";
      headerCartCount.textContent = Object.keys(cartProducts).length;
    } else {
      headerCartCount.style.display = "none";
    }
  };

  const renderCart = () => {
    orderList.innerHTML = "";
    for (let key in cartProducts) {
      createOrderCards(cartProducts[key]);
    }
    total.textContent = "$ " + calculateTotalPrice();
    attachCartEventListeners();
  };

  const attachCartEventListeners = () => {
    document.querySelectorAll(".order__remove").forEach((item) => {
      item.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
        delete cartProducts[id];
        renderCart();
        headerCount();
      });
    });

    document.querySelectorAll(".order__minus").forEach((item) => {
      item.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
        cartProducts[id].count--;
        if (cartProducts[id].count <= 0) {
          delete cartProducts[id];
        }
        renderCart();
        headerCount();
      });
    });

    document.querySelectorAll(".order__plus").forEach((item) => {
      item.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
        cartProducts[id].count++;
        if (cartProducts[id].count > 9) {
          cartProducts[id].count = 9;
        }
        renderCart();
      });
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (let key in cartProducts) {
      total += itemPrice(cartProducts[key].count, cartProducts[key].price);
    }
    return total;
  };

  const updateButtons = () => {
    document.querySelectorAll(".card__button").forEach((item) => {
      const productId = item.dataset.id;
      if (cartProducts[productId]) {
        item.innerHTML = '<img src="' + icon + '" alt="Added"/> Added';
      } else {
        item.innerHTML = "Add to Cart";
      }
    });
  };

  openBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openCart();
  });

  closeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    closeCart();
  });

  document.addEventListener("click", (event) => {
    if (!cart.contains(event.target) && cart.style.display === "flex") {
      closeCart();
    }
  });

  cart.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.querySelectorAll(".card__button").forEach((item) => {
    item.addEventListener("click", () => {
      const productId = item.dataset.id;

      allProducts.forEach((product) => {
        if (product.id == productId) {
          if (cartProducts[productId]) {
            cartProducts[productId].count += 1;
          } else {
            cartProducts[productId] = { ...product, count: 1 };
            item.innerHTML = '<img src="' + icon + '" alt="Added"/> Added';
          }
          headerCount();
        }
      });
    });
  });
});
