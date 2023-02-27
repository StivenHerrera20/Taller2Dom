const contenedorPadre = document.createElement("div");
contenedorPadre.setAttribute("class", "container-fluid");
document.body.appendChild(contenedorPadre);
const row = document.createElement("div");
row.setAttribute("class", "row");
contenedorPadre.appendChild(row);
const col = document.createElement("div");
col.setAttribute("class", "col-10");
row.appendChild(col);
const tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped mt-3");
tabla.setAttribute("style", "border: 1px solid black");
col.appendChild(tabla);
const cuerpo = document.createElement("tbody");
tabla.appendChild(cuerpo);
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const th5 = document.createElement("th");
th1.innerText = "Numero Album";
th2.innerText = "Id";
th3.innerText = "Titulo";
th4.innerText = "Miniatura";
th5.innerText = "Img";

cuerpo.insertRow(0);
cuerpo.rows[0].insertCell(0);
cuerpo.rows[0].cells[0].appendChild(th1);
cuerpo.rows[0].insertCell(1);
cuerpo.rows[0].cells[1].appendChild(th2);
cuerpo.rows[0].insertCell(2);
cuerpo.rows[0].cells[2].appendChild(th3);
cuerpo.rows[0].insertCell(3);
cuerpo.rows[0].cells[3].appendChild(th4);
cuerpo.rows[0].insertCell(4);
cuerpo.rows[0].cells[4].appendChild(th5);

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((respuesta) => {
    return respuesta.json();
  })

  .then((respuesta) => {
    for (let i = 1; i < respuesta.length; i++) {
      console.log(respuesta);
      cuerpo.insertRow(i);
      cuerpo.rows[i].insertCell(0);
      cuerpo.rows[i].cells[0].appendChild(
        document.createTextNode(respuesta[i].albumId)
      );
      cuerpo.rows[i].insertCell(1);
      cuerpo.rows[i].cells[1].appendChild(
        document.createTextNode(respuesta[i].id)
      );
      cuerpo.rows[i].insertCell(2);
      cuerpo.rows[i].cells[2].appendChild(
        document.createTextNode(respuesta[i].title)
      );
      cuerpo.rows[i].insertCell(3);
      const Miniatura = document.createElement("img");
      Miniatura.setAttribute("src", respuesta[i].thumbnailUrl);
      Miniatura.setAttribute("class", "");
      cuerpo.rows[i].cells[3].appendChild(Miniatura);
      cuerpo.rows[i].insertCell(4);
      const img = document.createElement("img");
      img.setAttribute("src", respuesta[i].url);
      img.setAttribute("class", "w-25");
      cuerpo.rows[i].cells[4].appendChild(img);
    }
  });
