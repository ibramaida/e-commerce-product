const cartDialog = document.querySelector(".cart-dialog");
const cartButton = document.querySelector(".cart");

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const counter = document.querySelector(".number");
const addToCart = document.querySelector(".add-to-cart");
const cart = document.querySelector(".cart");
const cartCounter = document.querySelector(".cart-items-count");

cartButton.addEventListener("click", () => {
  cartDialog.classList.toggle("show");
});

let count = 1;
counter.textContent = count;
increase.addEventListener("click", () => {
  // console.log("clicked");
  count++;
  counter.textContent = count;
});
decrease.addEventListener("click", () => {
  if (count <= 0) {
    return;
  }
  // console.log("clicked");
  count--;
  counter.textContent = count;
});

let cartCount = 0;
addToCart.addEventListener("click", () => {
  if (count <= 0) {
    return;
  }
  cartCount++;
  cartCounter.textContent = cartCount;
});
