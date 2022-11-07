const gap = 0;

// const carousel = document.querySelector(".product-image");
const carousel = document.querySelector(".carousel");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

next.addEventListener("click", (e) => {
  //   carousel.scrollBy(500, 0);
  carousel.scrollBy(width + gap, 0);
  //   if (carousel.scrollWidth !== 0) {
  //     previous.style.opacity = "1";
  //   }
  //   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
  //     next.style.opacity = "0";
  //   }
});
previous.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  //   if (carousel.scrollLeft - width - gap <= 0) {
  //     previous.style.opacity = "0";
  //   }
  //   if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
  //     next.style.opacity = "1";
  //   }
});

let width = carousel.offsetWidth;
// console.log(width);
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
