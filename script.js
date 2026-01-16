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

document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  const handleScroll = () => {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});