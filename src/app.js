/* eslint-disable */
import "./style.css";

import "./assets/img/4geeks.ico";

document.body.style.backgroundColor = "green";

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

window.onload = () => {
  const cardElement = document.querySelector(".card");

  if (cardElement) {
    const randomSuit = generateRandomSuit();
    const randomNumber = generateRandomNumber();

    // Replace spaces with underscores in the class name
    const sanitizedClass = randomSuit.replace(/\s/g, "_");

    cardElement.classList.add(sanitizedClass);
    cardElement.innerHTML = randomNumber;
  } else {
    console.error("Element with class 'card' not found.");
  }
  document.querySelector("#btn").addEventListener("click", () => {
    return generateRandomNumber;
    return generateRandomSuit;
  });
};
