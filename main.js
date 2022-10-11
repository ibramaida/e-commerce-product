const cartDialog = document.querySelector(".cart-dialog");
const cartButton = document.querySelector(".cart");

cartButton.addEventListener("click", () => {
  cartDialog.classList.toggle("show");
});
