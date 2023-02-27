const contenedorPadre = document.createElement("div");
contenedorPadre.setAttribute("class", "container-fluid");
document.body.appendChild(contenedorPadre);
const row = document.createElement("div");
row.setAttribute("class", "row");
contenedorPadre.appendChild(row);
const col = document.createElement("div");
col.setAttribute("class", "col-10");
row.appendChild(col);

const form = document.createElement("form");
col.appendChild(form);

const divNombre = document.createElement("div");
divNombre.setAttribute("class", "mb-3");
form.appendChild(divNombre);
const lblNombre = document.createElement("label");
lblNombre.innerText = "Nombre";
divNombre.appendChild(lblNombre);
const inputNombre = document.createElement("input");
inputNombre.setAttribute("class", "form-control");
divNombre.appendChild(inputNombre);

const divApellido = document.createElement("div");
divApellido.setAttribute("class", "mb-3");
form.appendChild(divApellido);
const lblApellido = document.createElement("label");
lblApellido.innerText = "Apellido";
divApellido.appendChild(lblApellido);
const inputApellido = document.createElement("input");
inputApellido.setAttribute("class", "form-control");
divApellido.appendChild(inputApellido);

const divEmail = document.createElement("div");
divEmail.setAttribute("class", "mb-3");
form.appendChild(divEmail);
const lblEmail = document.createElement("label");
lblEmail.innerText = "Correo electronico";
divEmail.appendChild(lblEmail);
const inputEmail = document.createElement("input");
inputEmail.setAttribute("class", "form-control");
divEmail.appendChild(inputEmail);

const divPais = document.createElement("div");
divPais.setAttribute("class", "mb-3");
form.appendChild(divPais);
const lblPais = document.createElement("label");
lblPais.innerText = "Pais Origen";
divPais.appendChild(lblPais);
const selectPais = document.createElement("select");
selectPais.setAttribute("class", "form-select form-select-lg mb-3");
divPais.appendChild(selectPais);

const divContinente = document.createElement("div");
divContinente.setAttribute("class", "mb-3");
form.appendChild(divContinente);
const lblContinente = document.createElement("label");
lblContinente.innerText = "Continente Origen";
divContinente.appendChild(lblContinente);
const selectContinente = document.createElement("select");
selectContinente.setAttribute("class", "form-select form-select-lg mb-3");
divContinente.appendChild(selectContinente);

//Continentes
fetch("reto6.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  //accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let i = 0; i < respuesta.length; i++) {
      const option = document.createElement("option");
      option.setAttribute("value", i);
      option.innerText = respuesta[i].nombre;
      selectContinente.appendChild(option);
    }
    //console.log(respuesta);
  });
//Pais
fetch("reto6-1.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  //accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let i = 0; i < respuesta.length; i++) {
      const option = document.createElement("option");
      option.setAttribute("value", i);
      option.innerText = respuesta[i].nombre;
      selectPais.appendChild(option);
    }
    //console.log(respuesta);
  });
