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

let generateCard = () => {
  const cardElement = document.querySelector(".card");

  if (cardElement) {
    const randomSuit = generateRandomSuit();
    const randomNumber = generateRandomNumber();

    // Remove previous suit class
    cardElement.classList.remove("diamond", "spade", "heart", "club");

    // Add new suit class
    cardElement.classList.add(randomSuit);

    cardElement.innerHTML = randomNumber;
  } else {
    console.error("Element with class 'card' not found.");
  }
};

window.onload = () => {
  // Initial card generation
  generateCard();

  // Add click event listener to the button
  document.querySelector("#btn").addEventListener("click", () => {
    // Generate a new card on button click
    generateCard();
  });
};
