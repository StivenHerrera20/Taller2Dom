const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

btn1.addEventListener("mouseover", () => {
  btn1.style =
    "background-color: peru; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 20px";
});
btn1.addEventListener("mouseout", () => {
  btn1.removeAttribute("style");
});
//boton 2
btn2.addEventListener("mouseover", () => {
  btn2.style =
    "background-color: cyan; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 20px";
});
btn2.addEventListener("mouseout", () => {
  btn2.removeAttribute("style");
});
//boton 3
btn3.addEventListener("mouseover", () => {
  btn3.style =
    "background-color: blue; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 20px";
});
btn3.addEventListener("mouseout", () => {
  btn3.removeAttribute("style");
});
//boton 4
btn4.addEventListener("mouseover", () => {
  btn4.style =
    "background-color: aqua; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 20px";
});
btn4.addEventListener("mouseout", () => {
  btn4.removeAttribute("style");
});
//boton 5
btn5.addEventListener("mouseover", () => {
  btn5.style =
    "background-color: brown; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 20px";
});
btn5.addEventListener("mouseout", () => {
  btn5.removeAttribute("style");
});
