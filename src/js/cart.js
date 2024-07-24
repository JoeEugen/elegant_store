import new_arrivals from "./json/new_goods.json";
import icon from "./../images/icons/check.svg";
import createOrderCards from "./order_creator";
import { itemPrice } from "./order_creator";

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".header__cart-btn");
  const cart = document.querySelector(".cart");
  const body = document.querySelector("body");
  const closeBtn = document.querySelector(".cart__close-btn");
  const bgFilter = document.querySelector(".bg-filter");

  const orderList = document.querySelector(".cart__products");
  const headerCartCount = document.querySelector(".header__count");
  const total = document.querySelector(".cart__total-price");

  let allProducts = new_arrivals.all_products;
  let cartProducts = {};

  const openCart = () => {
    cart.style.display = "flex";
    body.style.overflow = "hidden";
    bgFilter.style.display = "block";
    renderCart();
  };

  const closeCart = () => {
    cart.style.display = "none";
    body.style.overflow = "auto";
    bgFilter.style.display = "none";
    orderList.innerHTML = "";
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

// document.addEventListener("DOMContentLoaded", () => {
//   const openBtn = document.querySelector(".header__cart-btn");
//   const cart = document.querySelector(".cart");
//   const body = document.querySelector("body");
//   const closeBtn = document.querySelector(".cart__close-btn");
//   const bgFilter = document.querySelector(".bg-filter");

//   let orderList = document.querySelector(".cart__products");

//   const openCart = () => {
//     cart.style.display = "flex";
//     body.style.overflow = "hidden";
//     bgFilter.style.display = "block";
//     cartList();
//   };
//   const closeCart = () => {
//     cart.style.display = "none";
//     body.style.overflow = "auto";
//     bgFilter.style.display = "none";
//     orderList.innerHTML = "";
//   };

//   openBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     openCart();
//   });

//   closeBtn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     closeCart();
//   });

//   document.addEventListener("click", (event) => {
//     if (!cart.contains(event.target) && cart.style.display === "flex") {
//       closeCart();
//     }
//   });

//   cart.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });
// });

// import new_arrivals from "./json/new_goods.json";
// import icon from "./../images/icons/check.svg";
// import createOrderCards from "./order_creator";
// import { itemPrice } from "./order_creator";

// let allProducts = new_arrivals.all_products;
// let cartProducts = {};

// // Добавление в корзину элементов

// document.querySelectorAll(".card__button").forEach((item) => {
//   item.addEventListener("click", () => {
//     const productId = item.dataset.id;

//     allProducts.forEach((product) => {
//       if (product.id == productId) {
//         if (cartProducts[productId]) {
//           cartProducts[productId].count += 1;
//           headerCount();
//         } else {
//           cartProducts[productId] = { ...product, count: 1 };
//           headerCount();
//           item.innerHTML = '<img src="' + icon + '" alt="Added"/> Added';
//         }
//       }
//     });
//     console.log(Object.keys(cartProducts).length);
//   });
// });

// let headerCartCount = document.querySelector(".header__count");
// let orderList = document.querySelector(".cart__products");

// let headerCount = () => {
//   if (Object.keys(cartProducts).length > 0) {
//     headerCartCount.style.display = "flex";
//     headerCartCount.textContent = Object.keys(cartProducts).length;
//   } else headerCartCount.style.display = "none";
// };

// // Формирование списка товаров, удаление, счетчик, подсчет общей стоимости
// let cartList = () => {
//   for (let key in cartProducts) {
//     createOrderCards(cartProducts[key]);
//   }

//   let total = document.querySelector(".cart__total-price");
//   total.textContent = "$ " + totalPrice();

//   document.querySelectorAll(".order__remove").forEach((item) => {
//     item.addEventListener("click", (event) => {
//       let id = event.target.dataset.id;
//       delete cartProducts[id];
//       let orderList = document.querySelector(".cart__products");
//       orderList.innerHTML = "";
//       cartList();
//       headerCount();
//     });
//   });

//   document.querySelectorAll(".order__minus").forEach((item) => {
//     item.addEventListener("click", (event) => {
//       let id = event.target.dataset.id;
//       cartProducts[id].count--;
//       if (cartProducts[id].count <= 0) {
//         delete cartProducts[id];
//       }
//       orderList.innerHTML = "";
//       cartList();
//       headerCount();
//     });
//   });

//   document.querySelectorAll(".order__plus").forEach((item) => {
//     item.addEventListener("click", (event) => {
//       let id = event.target.dataset.id;
//       cartProducts[id].count++;
//       if (cartProducts[id].count > 9) {
//         cartProducts[id].count = 9;
//       }
//       orderList.innerHTML = "";
//       cartList();
//     });
//   });
// };

// let totalPrice = () => {
//   let total = 0;
//   for (let key in cartProducts) {
//     total += itemPrice(cartProducts[key].count, cartProducts[key].price);
//   }
//   return total;
// };
