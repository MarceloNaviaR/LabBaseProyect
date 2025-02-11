import sumar from "./sumador.js";
import multiplicar from "./multiplicar.js";

// Elementos de la suma
const firstSum = document.querySelector("#primer-numero-suma");
const secondSum = document.querySelector("#segundo-numero-suma");
const formSum = document.querySelector("#sumar-form");
const divSum = document.querySelector("#resultado-suma");

// Elementos de la multiplicación
const firstMulti = document.querySelector("#primer-numero-multi");
const secondMulti = document.querySelector("#segundo-numero-multi");
const formMulti = document.querySelector("#multiplicar-form");
const divMulti = document.querySelector("#resultado-multiplicacion");

// Evento para sumar
formSum.addEventListener("submit", (event) => {
  event.preventDefault();
  const num1 = Number.parseInt(firstSum.value);
  const num2 = Number.parseInt(secondSum.value);
  divSum.innerHTML = "<p>Resultado: " + sumar(num1, num2) + "</p>";
});

// Evento para multiplicar
formMulti.addEventListener("submit", (event) => {
  event.preventDefault();
  const num1 = Number.parseInt(firstMulti.value);
  const num2 = Number.parseInt(secondMulti.value);
  divMulti.innerHTML = "<p>Resultado: " + multiplicar(num1, num2) + "</p>";
});
