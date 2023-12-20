/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let domainNames;

  document.querySelector("#btn").addEventListener("click", () => {
    domainNames = generateDomain();
    displayDomains(domainNames);
  });
};

let generateDomain = () => {
  let pronoun = ["the", "our", "your", "its", "my"];
  let adj = ["great", "big", "happy", "ugly", "slow"];
  let noun = ["book", "dog", "family", "tree", "time"];
  let dom = [".com", ".net", ".gov", ".io", ".us"];

  let generatedDomains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let domainName = `${pronoun[i]}${adj[j]}${noun[k]}${dom[l]}`;
          generatedDomains.push(domainName);
        }
      }
    }
  }

  generatedDomains = shuffleArray(generatedDomains).slice(0, MAX_DOMAINS);

  return generatedDomains;
};

let shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let displayDomains = domains => {
  let domainList = domains.map(domain => `<li>${domain}</li>`).join("");
  document.querySelector(
    "#the-domain"
  ).innerHTML = `<ul style="list-style-type: none; padding: 0;">${domainList}</ul>`;
};
