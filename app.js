const levels = [
  {
    title: "Addizioni facili",
    items: [
      [3, "+", 2],
      [5, "+", 1],
      [2, "+", 3],
      [4, "+", 4],
    ],
  },
  {
    title: "Addizioni fino a 8",
    items: [
      [6, "+", 2],
      [1, "+", 5],
      [3, "+", 4],
      [2, "+", 6],
    ],
  },
  {
    title: "Sottrazioni facili",
    items: [
      [5, "-", 2],
      [7, "-", 3],
      [6, "-", 1],
      [4, "-", 2],
    ],
  },
  {
    title: "Sottrazioni fino a 10",
    items: [
      [10, "-", 3],
      [8, "-", 2],
      [9, "-", 4],
      [7, "-", 1],
    ],
  },
  {
    title: "Tabellina del 2",
    items: [
      [2, "×", 2],
      [2, "×", 3],
      [2, "×", 4],
      [2, "×", 5],
    ],
  },
  {
    title: "Tabellina del 3",
    items: [
      [3, "×", 2],
      [3, "×", 3],
      [3, "×", 4],
      [3, "×", 5],
    ],
  },
  {
    title: "Tabellina del 4",
    items: [
      [4, "×", 2],
      [4, "×", 3],
      [4, "×", 4],
      [4, "×", 5],
    ],
  },
  {
    title: "Divisioni per 2",
    items: [
      [6, ":", 2],
      [8, ":", 2],
      [10, ":", 2],
      [4, ":", 2],
    ],
  },
  {
    title: "Divisioni per 3",
    items: [
      [6, ":", 3],
      [9, ":", 3],
      [12, ":", 3],
      [15, ":", 3],
    ],
  },
  {
    title: "Missione mista",
    items: [
      [2, "+", 3],
      [7, "-", 2],
      [3, "×", 4],
      [12, ":", 3],
    ],
  },
];

const worksheet = document.querySelector("#worksheet");
const levelLabel = document.querySelector("#levelLabel");
const levelTitle = document.querySelector("#levelTitle");
const levelButtons = [...document.querySelectorAll(".level")];
const stars = document.querySelector("#stars");
const mascot = document.querySelector("#mascot");
const completeCard = document.querySelector("#completeCard");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");
const motionToggle = document.querySelector("#motionToggle");

let currentLevel = 0;

function solve(a, operator, b) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "×") return a * b;
  return a / b;
}

function renderLevel(index) {
  currentLevel = index;
  const level = levels[currentLevel];
  worksheet.innerHTML = "";
  levelLabel.textContent = `Livello ${currentLevel + 1}`;
  levelTitle.textContent = level.title;
  stars.textContent = "";
  completeCard.hidden = true;
  mascot.classList.remove("success");

  levelButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === currentLevel);
  });

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

function checkAnswer(exercise, input, answer) {
  const value = Number(input.value);
  exercise.classList.remove("correct", "wrong");

  if (input.value === "") {
    updateProgress();
    return;
  }

  if (value === answer) {
    exercise.classList.add("correct");
    input.setAttribute("aria-invalid", "false");
  } else {
    exercise.classList.add("wrong");
    input.setAttribute("aria-invalid", "true");
  }

  updateProgress();
}

function updateProgress() {
  const correct = worksheet.querySelectorAll(".exercise.correct").length;
  stars.textContent = "★".repeat(correct);

  if (correct === levels[currentLevel].items.length) {
    mascot.classList.add("success");
    completeCard.hidden = false;
  } else {
    mascot.classList.remove("success");
    completeCard.hidden = true;
  }
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => renderLevel(Number(button.dataset.level)));
});

resetBtn.addEventListener("click", () => renderLevel(currentLevel));

nextBtn.addEventListener("click", () => {
  const nextLevel = (currentLevel + 1) % levels.length;
  renderLevel(nextLevel);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

motionToggle.addEventListener("change", () => {
  document.body.classList.toggle("reduce-motion", motionToggle.checked);
});

renderLevel(0);
