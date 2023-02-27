const card = document.querySelector("#card");

card.addEventListener("mouseover", () => {
  card.style = "transform: scale(1.2);";
});
card.addEventListener("mouseout", () => {
  card.removeAttribute("style");
});
