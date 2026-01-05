window.addEventListener("load", () => {
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".fade-up");

  container.classList.remove("hidden");

  items.forEach(item => {
    item.classList.add("show");
  });
});
