const nav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-visible");

  if (isVisible === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(isVisible);
});
