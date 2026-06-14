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
  { title: "Addizioni fino a 25", items: [[13, "+", 7], [16, "+", 5], [11, "+", 9], [14, "+", 8]] },
  { title: "Sottrazioni fino a 25", items: [[25, "-", 9], [22, "-", 6], [19, "-", 8], [18, "-", 7]] },
  { title: "Tabellina del 7", items: [[7, "x", 2], [7, "x", 3], [7, "x", 4], [7, "x", 5]] },
  { title: "Divisioni miste", items: [[18, ":", 6], [21, ":", 7], [32, ":", 8], [45, ":", 9]] },
  { title: "Finale campione", items: [[15, "+", 12], [30, "-", 11], [9, "x", 5], [48, ":", 6]] },
];

const characters = [
  { icon: "★", name: "Stella Sprint", color: "#ffcc23" },
  { icon: "◆", name: "Rombo Blu", color: "#1d75d8" },
  { icon: "●", name: "Pallino Verde", color: "#22a95a" },
  { icon: "▲", name: "Triangolo Turbo", color: "#f0442f" },
  { icon: "✦", name: "Luce Veloce", color: "#ff8f1f" },
  { icon: "☀", name: "Sole Jump", color: "#ffc400" },
  { icon: "☁", name: "Nuvola Soft", color: "#42b9ec" },
  { icon: "✚", name: "Plus Power", color: "#20a464" },
  { icon: "■", name: "Quadrato Go", color: "#7357ff" },
  { icon: "⬟", name: "Scudo Smile", color: "#ff5c8a" },
  { icon: "✹", name: "Spark Kid", color: "#00a8a8" },
  { icon: "⬢", name: "Hexa Hero", color: "#6a9f2a" },
  { icon: "◈", name: "Diamante Zip", color: "#0f75bd" },
  { icon: "☄", name: "Cometa Fast", color: "#e94b35" },
  { icon: "✿", name: "Fiore Pop", color: "#e65db1" },
  { icon: "♣", name: "Club Green", color: "#248f5f" },
  { icon: "☂", name: "Ombrello Joy", color: "#8e65d8" },
  { icon: "✺", name: "Raggio Max", color: "#ff9f1c" },
  { icon: "⬤", name: "Bolla Boom", color: "#19a0ff" },
  { icon: "♛", name: "Re Calcolo", color: "#34495e" },
  { icon: "✧", name: "Nova Mini", color: "#12b886" },
  { icon: "⬥", name: "Gemma Flash", color: "#f76707" },
  { icon: "☯", name: "Yoyo Balance", color: "#845ef7" },
  { icon: "✪", name: "Super Star", color: "#fab005" },
  { icon: "♦", name: "Final Friend", color: "#e03131" },
];

const levelThemes = [
  { page: "#b9e6ff", stageA: "#0099ff", stageB: "#0066ff", work: "#c9ecff", panel: "#dff5ff", border: "#0077ff" },
  { page: "#8ff0b2", stageA: "#00c853", stageB: "#009624", work: "#bcffd0", panel: "#d9ffe5", border: "#00a33a" },
  { page: "#ffb3b3", stageA: "#ff3b30", stageB: "#c91818", work: "#ffd1d1", panel: "#ffe6e6", border: "#ff1f1f" },
  { page: "#d7b7ff", stageA: "#8b3dff", stageB: "#5f1fd6", work: "#e4d0ff", panel: "#f0e5ff", border: "#7b2cff" },
  { page: "#ffc078", stageA: "#ff8500", stageB: "#e8590c", work: "#ffd8a8", panel: "#fff0d8", border: "#ff7900" },
  { page: "#8bd8ff", stageA: "#00b4d8", stageB: "#0077b6", work: "#bdeeff", panel: "#e0f8ff", border: "#0088cc" },
  { page: "#9cff9c", stageA: "#38d000", stageB: "#008000", work: "#c8ffc8", panel: "#e5ffe5", border: "#18a300" },
  { page: "#ff9aa2", stageA: "#ff006e", stageB: "#b0004f", work: "#ffc2cc", panel: "#ffe4e9", border: "#e00062" },
  { page: "#c77dff", stageA: "#9d4edd", stageB: "#5a189a", work: "#e0aaff", panel: "#f3dcff", border: "#8a2be2" },
  { page: "#ffd166", stageA: "#ffb703", stageB: "#fb8500", work: "#ffe39c", panel: "#fff2c7", border: "#ffad00" },
  { page: "#5ee7ff", stageA: "#00d4ff", stageB: "#005eff", work: "#a7f3ff", panel: "#dafbff", border: "#00a6ff" },
  { page: "#57e389", stageA: "#00b894", stageB: "#006b52", work: "#a8f5c6", panel: "#d8ffe8", border: "#009b72" },
  { page: "#ff6b6b", stageA: "#ff1744", stageB: "#b00020", work: "#ffb3b3", panel: "#ffe0e0", border: "#e0002f" },
  { page: "#b197fc", stageA: "#7048e8", stageB: "#3b0ca3", work: "#d6c8ff", panel: "#eee8ff", border: "#5f3dc4" },
  { page: "#ffa94d", stageA: "#ff6d00", stageB: "#c43e00", work: "#ffc891", panel: "#ffe9cf", border: "#f76707" },
  { page: "#74c0fc", stageA: "#228be6", stageB: "#0b4f9c", work: "#b8ddff", panel: "#e3f2ff", border: "#1971c2" },
  { page: "#69db7c", stageA: "#2f9e44", stageB: "#0b5d1e", work: "#b2f2bb", panel: "#e2ffe7", border: "#2b8a3e" },
  { page: "#ff8787", stageA: "#fa5252", stageB: "#a51111", work: "#ffc9c9", panel: "#ffe3e3", border: "#e03131" },
  { page: "#da77f2", stageA: "#be4bdb", stageB: "#862e9c", work: "#efc2ff", panel: "#fae5ff", border: "#ae3ec9" },
  { page: "#ff922b", stageA: "#f76707", stageB: "#b33b00", work: "#ffd0a1", panel: "#ffecd6", border: "#e8590c" },
  { page: "#4dabf7", stageA: "#1c7ed6", stageB: "#003f88", work: "#a5d8ff", panel: "#d8efff", border: "#1864ab" },
  { page: "#51cf66", stageA: "#37b24d", stageB: "#1b6b2a", work: "#b2f2bb", panel: "#e1ffe6", border: "#2f9e44" },
  { page: "#ff5c8a", stageA: "#f72585", stageB: "#9d005d", work: "#ffb3ca", panel: "#ffe0eb", border: "#d6336c" },
  { page: "#9775fa", stageA: "#7950f2", stageB: "#4527a0", work: "#d0bfff", panel: "#eee8ff", border: "#6741d9" },
  { page: "#ff7b00", stageA: "#ff5400", stageB: "#9d2500", work: "#ffbd7a", panel: "#ffe3c2", border: "#f76707" },
];

const LEVELS_PER_STEP = 5;
const worksheet = document.querySelector("#worksheet");
const levelLabel = document.querySelector("#levelLabel");
const levelTitle = document.querySelector("#levelTitle");
const stepStrip = document.querySelector("#stepStrip");
const levelStrip = document.querySelector("#levelStrip");
const levelCharacter = document.querySelector("#levelCharacter");
const characterIcon = document.querySelector("#characterIcon");
const characterName = document.querySelector("#characterName");
const stars = document.querySelector("#stars");
const mascot = document.querySelector("#mascot");
const completeCard = document.querySelector("#completeCard");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const motionToggle = document.querySelector("#motionToggle");
const soundToggle = document.querySelector("#soundToggle");
const levelParty = document.querySelector("#levelParty");
const finalParty = document.querySelector("#finalParty");
const partyCloseBtn = document.querySelector("#partyCloseBtn");

let currentLevel = 0;
let currentStep = 0;
let audioContext;
let levelPartyTimer;
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

function showLevelParty() {
  levelParty.hidden = false;
  levelParty.classList.remove("replay");
  void levelParty.offsetWidth;
  levelParty.classList.add("replay");

  window.clearTimeout(levelPartyTimer);
  levelPartyTimer = window.setTimeout(() => {
    levelParty.hidden = true;
    levelParty.classList.remove("replay");
  }, 2100);
}

function getStepCount() {
  return Math.ceil(levels.length / LEVELS_PER_STEP);
}

function getStepRange(stepIndex) {
  const start = stepIndex * LEVELS_PER_STEP;
  const end = Math.min(start + LEVELS_PER_STEP, levels.length);
  return { start, end };
}

function isStepComplete(stepIndex) {
  const { start, end } = getStepRange(stepIndex);
  for (let index = start; index < end; index++) {
    if (!completedLevels.has(index)) return false;
  }
  return true;
}

function renderNavigation() {
  stepStrip.innerHTML = "";
  levelStrip.innerHTML = "";

  for (let stepIndex = 0; stepIndex < getStepCount(); stepIndex++) {
    const button = document.createElement("button");
    button.className = "step";
    button.type = "button";
    button.dataset.step = String(stepIndex);
    button.textContent = `Step ${stepIndex + 1}`;
    button.addEventListener("click", () => {
      const { start } = getStepRange(stepIndex);
      renderLevel(start);
    });
    stepStrip.appendChild(button);
  }

  const { start, end } = getStepRange(currentStep);
  for (let index = start; index < end; index++) {
    const button = document.createElement("button");
    button.className = "level";
    button.type = "button";
    button.dataset.level = String(index);
    button.textContent = String(index - start + 1);
    button.setAttribute("aria-label", `Step ${currentStep + 1}, livello ${index - start + 1}`);
    button.addEventListener("click", () => renderLevel(index));
    levelStrip.appendChild(button);
  }

  refreshNavigation();
}

function renderLevel(index) {
  currentLevel = index;
  currentStep = Math.floor(currentLevel / LEVELS_PER_STEP);
  const level = levels[currentLevel];
  worksheet.innerHTML = "";
  levelLabel.textContent = `Step ${currentStep + 1} - Livello ${(currentLevel % LEVELS_PER_STEP) + 1}`;
  levelTitle.textContent = level.title;
  stars.textContent = "";
  completeCard.hidden = true;
  levelParty.hidden = true;
  finalParty.hidden = true;
  mascot.classList.remove("success");

  renderTheme(index);
  renderCharacter(index);
  renderNavigation();

  level.items.forEach(([a, operator, b], itemIndex) => {
    const exercise = document.createElement("article");
    exercise.className = "exercise";
    applyExerciseTheme(exercise, currentLevel);
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

function renderTheme(index) {
  const theme = levelThemes[index % levelThemes.length];
  document.documentElement.style.setProperty("--page-bg", theme.page);
  document.documentElement.style.setProperty("--stage-a", theme.stageA);
  document.documentElement.style.setProperty("--stage-b", theme.stageB);
  document.documentElement.style.setProperty("--work-bg", theme.work);
  document.documentElement.style.setProperty("--picker-bg", theme.panel);
  document.documentElement.style.setProperty("--theme-border", theme.border);
  document.body.style.background = `linear-gradient(${theme.page}, #ffffff)`;
  document.querySelector(".level-picker")?.style.setProperty("background", theme.panel);
  document.querySelector(".level-picker")?.style.setProperty("border-color", theme.border);
}

function applyExerciseTheme(exercise, index) {
  const theme = levelThemes[index % levelThemes.length];
  exercise.style.background = theme.work;
  exercise.style.borderColor = theme.border;
}

function renderCharacter(index) {
  const character = characters[index % characters.length];
  characterIcon.textContent = character.icon;
  characterName.textContent = character.name;
  levelCharacter.style.setProperty("--character-color", character.color);
  levelCharacter.setAttribute("aria-label", `Personaggio del livello: ${character.name}`);
}

function refreshNavigation() {
  document.querySelectorAll(".step").forEach((button) => {
    const stepIndex = Number(button.dataset.step);
    button.classList.toggle("active", stepIndex === currentStep);
    button.classList.toggle("done", isStepComplete(stepIndex));
  });

  document.querySelectorAll(".level").forEach((button) => {
    const levelIndex = Number(button.dataset.level);
    button.classList.toggle("active", levelIndex === currentLevel);
    button.classList.toggle("done", completedLevels.has(levelIndex));
  });
}

function checkAnswer(exercise, input, answer) {
  const rawValue = input.value.trim();
  const value = Number(rawValue);
  const expectedLength = String(answer).length;
  const wasCorrect = exercise.classList.contains("correct");
  const wasWrong = exercise.classList.contains("wrong");
  exercise.classList.remove("correct", "wrong");

  if (rawValue === "") {
    input.removeAttribute("aria-invalid");
    updateProgress();
    return;
  }

  if (rawValue.length < expectedLength) {
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
    refreshNavigation();

    if (firstCompletion) {
      showLevelParty();
    }

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

renderLevel(0);
