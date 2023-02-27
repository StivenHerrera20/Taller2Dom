const capaMostrar = document.querySelector("#capaMostrar");

const btnUltimaMod = document.querySelector("#btnUltimaMod");
const btnImg = document.querySelector("#btnImg");

btnUltimaMod.addEventListener("click", () => {
  console.log(document.title);
  capaMostrar.innerHTML += new Date(document.lastModified) + "<br>";
});
btnImg.addEventListener("click", () => {
  capaMostrar.innerHTML += document.images.length + "<br>";
  for (let index = 0; index < document.images.length; index++) {
    capaMostrar.innerHTML +=
      "<b>Imagen1:</b> " + document.images[i].src + "<br>";
  }
});
