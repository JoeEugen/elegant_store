const salelineClose = function () {
  const closeBtn = document.querySelector(".saleline__close-btn");
  const saleline = document.querySelector(".saleline");

  closeBtn.addEventListener("click", () => (saleline.style.display = "none"));
};

export default salelineClose;
