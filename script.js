// JavaScript to make items visible one by one on scroll
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("scroll", () => {
  const items = document.querySelectorAll(".hidden");
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("visible");
      item.classList.remove("hidden");
    }
  });
});