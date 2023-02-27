const contenedorPadre = document.createElement("div");
contenedorPadre.setAttribute("class", "container-fluid");
document.body.appendChild(contenedorPadre);
const row = document.createElement("div");
row.setAttribute("class", "row");
contenedorPadre.appendChild(row);

fetch("https://api.punkapi.com/v2/beers")
  .then((respuesta) => {
    return respuesta.json();
  })

  .then((respuesta) => {
    for (let index = 0; index < respuesta.length; index++) {
      //console.log(respuesta);
      const col = document.createElement("div");
      col.setAttribute("class", "col-3");

      const card = document.createElement("div");
      card.setAttribute("class", "card mt-3");
      const img = document.createElement("img");
      img.setAttribute("src", respuesta[index].image_url);
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      cardBody.innerHTML =
        respuesta[index].name + "<br>" + respuesta[index].description;
      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
    }
    //console.log(respuesta);
  });
