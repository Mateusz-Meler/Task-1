// alert("działa");

let button = document.querySelector(".button--js");
let counter = 1;

button = document.addEventListener("click", () => {
  const divElement = document.createElement("div");
  divElement.textContent = `${counter}`;
  if (counter % 5 == 0) {
    divElement.className = "circle";
  } else {
    divElement.className = "square";
  }
  counter++;
  document.querySelector("div").appendChild(divElement);
});
