const cardFilenames = [
  "RWS_Tarot_00_Fool.jpg", "RWS_Tarot_01_Magician.jpg", "RWS_Tarot_02_High_Priestess.jpg",
  "RWS_Tarot_03_Empress.jpg", "RWS_Tarot_04_Emperor.jpg", "RWS_Tarot_05_Hierophant.jpg",
  "RWS_Tarot_06_Lovers.jpg", "RWS_Tarot_07_Chariot.jpg", "RWS_Tarot_08_Strength.jpg",
  "RWS_Tarot_09_Hermit.jpg", "RWS_Tarot_10_Wheel_of_Fortune.jpg", "RWS_Tarot_11_Justice.jpg",
  "RWS_Tarot_12_Hanged_Man.jpg", "RWS_Tarot_13_Death.jpg", "RWS_Tarot_14_Temperance.jpg",
  "RWS_Tarot_15_Devil.jpg", "RWS_Tarot_16_Tower.jpg", "RWS_Tarot_17_Star.jpg",
  "RWS_Tarot_18_Moon.jpg", "RWS_Tarot_19_Sun.jpg", "RWS_Tarot_20_Judgement.jpg",
  "RWS_Tarot_21_World.jpg",
  ...Array.from({length: 14}, (_, i) => `Cups${String(i + 1).padStart(2, "0")}.jpg`),
  ...Array.from({length: 14}, (_, i) => `Pents${String(i + 1).padStart(2, "0")}.jpg`),
  ...Array.from({length: 14}, (_, i) => `Swords${String(i + 1).padStart(2, "0")}.jpg`),
  ...Array.from({length: 14}, (_, i) => `Wands${String(i + 1).padStart(2, "0")}.jpg`)
];

const drawnCards = new Set();

const drawBtn = document.getElementById("draw-btn");
const resetBtn = document.getElementById("reset-btn");
const container = document.getElementById("card-container");

drawBtn.addEventListener("click", () => {
  // 🔥 Hide the deck back image if it's there
  const deckBack = document.getElementById("deck-back");
  if (deckBack) deckBack.style.display = "none";

  if (drawnCards.size >= cardFilenames.length) {
    alert("Todas las cartas han sido mostradas.");
    return;
  }

  let card;
  do {
    card = cardFilenames[Math.floor(Math.random() * cardFilenames.length)];
  } while (drawnCards.has(card));

  drawnCards.add(card);

  const img = document.createElement("img");
  img.src = `cards/${card}`;
  img.alt = "";
  container.appendChild(img);
});

resetBtn.addEventListener("click", () => {
  drawnCards.clear();
  container.innerHTML = "";

  // 🔄 Show the deck back again on reset
  const deckBack = document.getElementById("deck-back");
  if (deckBack) deckBack.style.display = "block";
});
