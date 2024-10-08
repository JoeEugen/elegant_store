let cardsCreator = function (products, place, status) {
  products.forEach((item) => {
    let card = document.createElement("div");
    let openCard = document.createElement("button");
    let cardHeader = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBadge = document.createElement("div");
    let cardWishlist = document.createElement("button");
    let cardButton = document.createElement("button");
    let cardDesc = document.createElement("div");
    let cardRaiting = document.createElement("div");
    let cardModel = document.createElement("div");
    let cardPrice = document.createElement("div");

    card.classList.add("card", "swiper-slide");
    cardHeader.classList.add("card__header");
    cardImage.classList.add("card__image");
    openCard.classList.add("card__open");
    cardBadge.classList.add("card__badge");
    cardWishlist.classList.add("card__wishlist");
    cardButton.classList.add("button", "card__button");
    cardDesc.classList.add("card__desc");
    cardRaiting.classList.add("card__raiting");
    cardModel.classList.add("card__model");
    cardPrice.classList.add("card__price");

    cardImage.src = require("./../images/goods/" + item.image_url);
    cardImage.srcset = "./../images/goods/" + item.image_hd;
    cardBadge.textContent = status.toUpperCase();
    cardWishlist.innerHTML = `
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.577 3.76422C10.2546 4.07365 9.74548 4.07365 9.42304 3.76422L8.84604 3.2105C8.17068 2.56239 7.25832 2.16667 6.25004 2.16667C4.17897 2.16667 2.50004 3.8456 2.50004 5.91667C2.50004 7.90219 3.57486 9.54171 5.1265 10.8888C6.67947 12.237 8.53621 13.1312 9.64558 13.5876C9.87754 13.683 10.1225 13.683 10.3545 13.5876C11.4639 13.1312 13.3206 12.237 14.8736 10.8888C16.4252 9.54171 17.5 7.90218 17.5 5.91667C17.5 3.8456 15.8211 2.16667 13.75 2.16667C12.7418 2.16667 11.8294 2.56239 11.154 3.2105L10.577 3.76422ZM10 2.00798C9.0268 1.074 7.70545 0.5 6.25004 0.5C3.2585 0.5 0.833374 2.92512 0.833374 5.91667C0.833374 11.2235 6.64199 14.1542 9.01153 15.1289C9.64968 15.3914 10.3504 15.3914 10.9885 15.1289C13.3581 14.1542 19.1667 11.2235 19.1667 5.91667C19.1667 2.92512 16.7416 0.5 13.75 0.5C12.2946 0.5 10.9733 1.074 10 2.00798Z" fill="#6C7275"/>
          </svg>`;
    cardButton.textContent = "Add to Cart";
    cardButton.dataset.id = item.id;

    for (let i = 0; i < item.rating; i++) {
      let ratingImg = createElement("img");
      ratingImg.src = require("./../images/icons/raiting.svg");
      cardRaiting.appendChild(ratingImg);
    }
    cardModel.textContent = item.name;
    cardPrice.textContent = "$" + item.price;

    cardHeader.append(cardImage, cardBadge, cardWishlist, cardButton);
    cardDesc.append(cardRaiting, cardModel, cardPrice);
    card.append(cardHeader, cardDesc, openCard);
    place.appendChild(card);
  });
};

let createElement = function (element) {
  return document.createElement(element); // возвращаем созданный элемент
};

export default cardsCreator;
