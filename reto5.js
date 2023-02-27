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
th1.innerText = "Nombre";
th2.innerText = "Genero";
th3.innerText = "Color";
th4.innerText = "Tipo";
th5.innerText = "Fecha Nacimiento";
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
fetch("reto5.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  //accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let i = 1; i < respuesta.length; i++) {
      cuerpo.insertRow(i);
      cuerpo.rows[i].insertCell(0);
      cuerpo.rows[i].cells[0].appendChild(
        document.createTextNode(respuesta[i].nombre)
      );
      cuerpo.rows[i].insertCell(1);
      cuerpo.rows[i].cells[1].appendChild(
        document.createTextNode(respuesta[i].genero)
      );
      cuerpo.rows[i].insertCell(2);
      cuerpo.rows[i].cells[2].appendChild(
        document.createTextNode(respuesta[i].color)
      );
      cuerpo.rows[i].insertCell(3);
      cuerpo.rows[i].cells[3].appendChild(
        document.createTextNode(respuesta[i].tipo)
      );
      cuerpo.rows[i].insertCell(4);
      cuerpo.rows[i].cells[4].appendChild(
        document.createTextNode(respuesta[i].fechaNace)
      );
    }
    //console.log(respuesta);
  });
