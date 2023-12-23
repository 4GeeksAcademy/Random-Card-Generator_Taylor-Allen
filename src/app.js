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
  let suit = ["diamond", "spade", "heart2", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

let generateCard = () => {
  const cardElement = document.querySelector(".card");

  if (cardElement) {
    const randomSuit = generateRandomSuit();
    const randomNumber = generateRandomNumber();

    // Remove previous suit class
    cardElement.classList.remove("diamond", "spade", "heart2", "club");

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
  document.querySelector(".pumping").addEventListener("click", () => {
    // Generate a new card on button click
    generateCard();
  });
};

// here lies the click me button code

const colors = ["#FC4F4F", "#FFBC80", "#FF9F45", "#F76E11"];
// const shapes = ['square', 'circle', 'triangle', 'heart']
const shapes = ["heart"];

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class Particle {
  constructor({ x, y, rotation, shape, color, size, duration, parent }) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.rotation = rotation;
    this.shape = shape;
    this.color = color;
    this.size = size;
    this.duration = duration;
    this.children = document.createElement("div");
  }

  draw() {
    this.children.style.setProperty("--x", this.x + "px");
    this.children.style.setProperty("--y", this.y + "px");
    this.children.style.setProperty("--r", this.rotation + "deg");
    this.children.style.setProperty("--c", this.color);
    this.children.style.setProperty("--size", this.size + "px");
    this.children.style.setProperty("--d", this.duration + "ms");
    this.children.className = `shape ${this.shape}`;
    this.parent.append(this.children);
  }

  animate() {
    this.draw();

    const timer = setTimeout(() => {
      this.parent.removeChild(this.children);
      clearTimeout(timer);
    }, this.duration);
  }
}

function animateParticles({ total }) {
  for (let i = 0; i < total; i++) {
    const particle = new Particle({
      x: randomIntBetween(-200, 200),
      y: randomIntBetween(-100, -300),
      rotation: randomIntBetween(-360 * 5, 360 * 5),
      shape: shapes[randomIntBetween(0, shapes.length - 1)],
      color: colors[randomIntBetween(0, colors.length - 1)],
      size: randomIntBetween(4, 7),
      duration: randomIntBetween(400, 800),
      parent
    });
    particle.animate();
  }
}

let intervalTimer = setInterval(() => {
  animateParticles({ total: 8 });
}, 100);

const parent = document.querySelector(".pumping");
parent.addEventListener("click", e => {
  console.log("your button is working marvelously");
  if (intervalTimer) {
    clearInterval(intervalTimer);
    intervalTimer = null;
    parent.classList.remove("pumping");
  }
  animateParticles({ total: 40 });
});
