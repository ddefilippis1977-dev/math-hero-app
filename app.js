const levels = [
  { title: "Addizioni facili", items: [[3, "+", 2], [5, "+", 1], [2, "+", 3], [4, "+", 4]] },
  { title: "Addizioni fino a 8", items: [[6, "+", 2], [1, "+", 5], [3, "+", 4], [2, "+", 6]] },
  { title: "Sottrazioni facili", items: [[5, "-", 2], [7, "-", 3], [6, "-", 1], [4, "-", 2]] },
  { title: "Sottrazioni fino a 10", items: [[10, "-", 3], [8, "-", 2], [9, "-", 4], [7, "-", 1]] },
  { title: "Tabellina del 2", items: [[2, "x", 2], [2, "x", 3], [2, "x", 4], [2, "x", 5]] },
  { title: "Tabellina del 3", items: [[3, "x", 2], [3, "x", 3], [3, "x", 4], [3, "x", 5]] },
  { title: "Tabellina del 4", items: [[4, "x", 2], [4, "x", 3], [4, "x", 4], [4, "x", 5]] },
  { title: "Divisioni per 2", items: [[6, ":", 2], [8, ":", 2], [10, ":", 2], [4, ":", 2]] },
  { title: "Divisioni per 3", items: [[6, ":", 3], [9, ":", 3], [12, ":", 3], [15, ":", 3]] },
  { title: "Missione mista", items: [[2, "+", 3], [7, "-", 2], [3, "x", 4], [12, ":", 3]] },
  { title: "Addizioni fino a 12", items: [[8, "+", 3], [6, "+", 5], [9, "+", 2], [7, "+", 4]] },
  { title: "Sottrazioni fino a 12", items: [[12, "-", 4], [11, "-", 5], [10, "-", 6], [9, "-", 3]] },
  { title: "Tabellina del 5", items: [[5, "x", 2], [5, "x", 3], [5, "x", 4], [5, "x", 5]] },
  { title: "Tabellina del 6", items: [[6, "x", 2], [6, "x", 3], [6, "x", 4], [6, "x", 5]] },
  { title: "Divisioni per 4", items: [[8, ":", 4], [12, ":", 4], [16, ":", 4], [20, ":", 4]] },
  { title: "Divisioni per 5", items: [[10, ":", 5], [15, ":", 5], [20, ":", 5], [25, ":", 5]] },
  { title: "Numeri mancanti", items: [[4, "+", 7], [13, "-", 6], [7, "x", 3], [24, ":", 6]] },
  { title: "Sfida colori", items: [[9, "+", 8], [15, "-", 7], [6, "x", 6], [28, ":", 4]] },
  { title: "Super calcoli", items: [[14, "+", 6], [18, "-", 9], [7, "x", 4], [30, ":", 5]] },
  { title: "Grande finale", items: [[12, "+", 9], [20, "-", 8], [8, "x", 5], [36, ":", 6]] },
];

const worksheet = document.querySelector("#worksheet");
const levelLabel = document.querySelector("#levelLabel");
const levelTitle = document.querySelector("#levelTitle");
const levelStrip = document.querySelector("#levelStrip");
const stars = document.querySelector("#stars");
const mascot = document.querySelector("#mascot");
const completeCard = document.querySelector("#completeCard");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const motionToggle = document.querySelector("#motionToggle");
const soundToggle = document.querySelector("#soundToggle");
const finalParty = document.querySelector("#finalParty");
const partyCloseBtn = document.querySelector("#partyCloseBtn");

let currentLevel = 0;
let audioContext;
const completedLevels = new Set();

function solve(a, operator, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "x") return a * b;
  return a / b;
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playTone(frequency, duration, type = "sine", delay = 0, volume = 0.16) {
  if (!soundToggle.checked) return;
  const ctx = getAudioContext();
  const start = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playCorrectSound() {
  playTone(640, 0.12, "triangle", 0);
  playTone(880, 0.16, "triangle", 0.12);
}

function playWrongSound() {
  playTone(220, 0.18, "sawtooth", 0, 0.08);
  playTone(160, 0.2, "sawtooth", 0.15, 0.07);
}

function playVictoryMusic() {
  const notes = [523, 659, 784, 1046, 784, 1046, 1318];
  notes.forEach((note, index) => playTone(note, 0.18, "triangle", index * 0.16, 0.14));
}

function renderLevelButtons() {
  let buttons = [...levelStrip.querySelectorAll(".level")];

  if (buttons.length !== levels.length) {
    levelStrip.innerHTML = "";
    levels.forEach((_, index) => {
      const button = document.createElement("button");
      button.className = "level";
      button.type = "button";
      button.dataset.level = String(index);
      button.textContent = String(index + 1);
      levelStrip.appendChild(button);
    });
    buttons = [...levelStrip.querySelectorAll(".level")];
  }

  buttons.forEach((button, index) => {
    button.dataset.level = String(index);
    button.addEventListener("click", () => renderLevel(index));
  });
}

function renderLevel(index) {
  currentLevel = index;
  const level = levels[currentLevel];
  worksheet.innerHTML = "";
  levelLabel.textContent = `Livello ${currentLevel + 1}`;
  levelTitle.textContent = level.title;
  stars.textContent = "";
  completeCard.hidden = true;
  finalParty.hidden = true;
  mascot.classList.remove("success");

  refreshLevelButtons();

  level.items.forEach(([a, operator, b], itemIndex) => {
    const exercise = document.createElement("article");
    exercise.className = "exercise";
    exercise.innerHTML = `
      <div class="formula" aria-label="${a} ${operator} ${b}">
        <span class="n1">${a}</span>
        <span class="op">${operator}</span>
        <span class="n2">${b}</span>
        <span class="eq">=</span>
      </div>
      <input class="answer" inputmode="numeric" pattern="[0-9]*" aria-label="Risposta esercizio ${itemIndex + 1}" />
    `;

    const input = exercise.querySelector("input");
    input.addEventListener("input", () => checkAnswer(exercise, input, solve(a, operator, b)));
    worksheet.appendChild(exercise);
  });

  worksheet.querySelector("input")?.focus();
}

function refreshLevelButtons() {
  document.querySelectorAll(".level").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === currentLevel);
    button.classList.toggle("done", completedLevels.has(buttonIndex));
  });
}

function checkAnswer(exercise, input, answer) {
  const value = Number(input.value);
  const wasCorrect = exercise.classList.contains("correct");
  const wasWrong = exercise.classList.contains("wrong");
  exercise.classList.remove("correct", "wrong");

  if (input.value === "") {
    input.removeAttribute("aria-invalid");
    updateProgress();
    return;
  }

  if (value === answer) {
    exercise.classList.add("correct");
    input.setAttribute("aria-invalid", "false");
    if (!wasCorrect) playCorrectSound();
  } else {
    exercise.classList.add("wrong");
    input.setAttribute("aria-invalid", "true");
    if (!wasWrong) playWrongSound();
  }

  updateProgress();
}

function updateProgress() {
  const correct = worksheet.querySelectorAll(".exercise.correct").length;
  stars.textContent = "*".repeat(correct);

  if (correct === levels[currentLevel].items.length) {
    const firstCompletion = !completedLevels.has(currentLevel);
    completedLevels.add(currentLevel);
    mascot.classList.add("success");
    completeCard.hidden = false;
    refreshLevelButtons();

    if (firstCompletion && completedLevels.size === levels.length) {
      finalParty.hidden = false;
      playVictoryMusic();
    }
  } else {
    mascot.classList.remove("success");
    completeCard.hidden = true;
  }
}

resetBtn.addEventListener("click", () => renderLevel(currentLevel));

nextBtn.addEventListener("click", () => {
  const nextLevel = (currentLevel + 1) % levels.length;
  renderLevel(nextLevel);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

partyCloseBtn.addEventListener("click", () => {
  finalParty.hidden = true;
  renderLevel(0);
});

motionToggle.addEventListener("change", () => {
  document.body.classList.toggle("reduce-motion", motionToggle.checked);
});

renderLevelButtons();
renderLevel(0);
