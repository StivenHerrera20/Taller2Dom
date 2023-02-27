const btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", (e) => {
  e.preventDefault();
  const pokemon = document.querySelector("#pokemon").value;
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((respuesta) => {
      console.log(respuesta);
    });
});
