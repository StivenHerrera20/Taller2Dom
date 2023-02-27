const col = document.querySelector("#column");
const acordion = document.createElement("div");
acordion.setAttribute("class", "accordion accordion-flush");
col.appendChild(acordion);

fetch("MOCK_DATA2.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((respuesta) => {
    for (let i = 0; i < respuesta.length; i++) {
      const items = document.createElement("div");
      items.setAttribute("class", "accordion-item");
      const title = document.createElement("h2");
      title.setAttribute("class", "accordion-header");
      const btn = document.createElement("button");
      btn.setAttribute("class", "accordion-button text-light fw-bold bg-dark");
      btn.innerHTML = respuesta[i].Movie_genres;

      const panel = document.createElement("div");
      panel.setAttribute("class", "accordion-collapse collapse show bg-dark");
      const acordionBody = document.createElement("div");
      acordionBody.setAttribute("class", "accordion-body text-light bg-dark");
      const titulo = document.createElement("h5");
      const parrafo = document.createElement("p");
      titulo.innerHTML = respuesta[i].Movie_Titles;
      parrafo.innerHTML = respuesta[i].city;

      btn.addEventListener("click", () => {
        if (panel.innerHTML) {
          panel.removeChild(acordionBody);
        } else {
          items.appendChild(panel);
          panel.appendChild(acordionBody);
          acordionBody.append(titulo, parrafo);
        }
      });
      acordion.appendChild(items);
      items.append(title, btn);
    }
  });
