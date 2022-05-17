// alert("działa");

let button = document.querySelector(".button--js");
let counter = 0;

button = document.addEventListener("click", () => {
  const divElement = document.createElement("div");
  divElement.textContent = `${counter}`;
  divElement.className = "square";
  document.querySelector("div").appendChild(divElement);
  counter++;
  console.log("kliknąłem");
});
