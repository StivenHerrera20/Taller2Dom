const col = document.querySelector("#column");
fetch("MOCK_DATA.json")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((respuesta) => {
    for (let i = 0; i < respuesta.length; i++) {
      const alert = document.createElement("div");
      alert.setAttribute("class", "alert alert-light mt-2");
      alert.innerHTML =
        "<b>ID:</b> " +
        respuesta[i].id +
        "<br> <b>Primer Nombre:</b> " +
        respuesta[i].first_name +
        "<br> <b>Apellido:</b> " +
        respuesta[i].last_name +
        "<br> <b>Correo electronico:</b> " +
        respuesta[i].email +
        "<br> <b>Pais: </b>" +
        respuesta[i].country;
      col.appendChild(alert);
    }
  });
