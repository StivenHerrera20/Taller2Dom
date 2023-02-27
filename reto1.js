const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

img1.addEventListener("mouseover", () => {
  const capa = document.createElement("div");
  capa.innerText = img1.getAttribute("src");
  document.body.appendChild(capa);
});
img2.addEventListener("mouseover", () => {
  const capa = document.createElement("div");
  capa.innerText = img2.getAttribute("src");
  document.body.appendChild(capa);
});
img3.addEventListener("mouseover", () => {
  const capa = document.createElement("div");
  capa.innerText = img3.getAttribute("src");
  document.body.appendChild(capa);
});
