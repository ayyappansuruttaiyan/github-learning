const btnRoll0El = document.getElementById("player--0");
const btnRoll1El = document.getElementById("player--1");
const btnReset = document.querySelector(".btn--reset");
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const diceEl = document.querySelector(".dice-img");
const winnerBoardEl = document.querySelector(".winner-board");
// game initial stage
let score = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// choose player
const player = () => {
  return Math.trunc(Math.random() * 2) + 1;
};
const choosePlayer = player();
console.log(choosePlayer);
if (choosePlayer === 1) {
  btnRoll0El.disabled = false;
  btnRoll1El.disabled = true;
  btnRoll0El.classList.add("player--active");
  btnRoll1El.classList.remove("player--active");
} else {
  btnRoll0El.disabled = true;
  btnRoll1El.disabled = false;
  btnRoll0El.classList.remove("player--active");
  btnRoll1El.classList.add("player--active");
}

// const toggle = document.btnRoll0El.toggle();

// player 1 roll button functionality
btnRoll0El.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `images/dice-${dice}.png`;
  console.log(dice);
  // if (dice !== 1) {
  score[0] = score[0] + dice;
  score0El.textContent = score[0];
  diceEl.classList.remove("hidden");
  btnRoll0El.disabled = true;
  btnRoll1El.disabled = false;
  btnRoll0El.classList.remove("player--active");
  btnRoll1El.classList.add("player--active");
  if (score[0] >= 30) {
    winnerBoardEl.textContent = "Player 1 Wins";
    winnerBoardEl.classList.remove("hidden");
    diceEl.classList.add("hidden");
    btnRoll0El.classList.add("player--active");
    btnRoll1El.classList.remove("player--active");
    btnRoll0El.disabled = true;
    btnRoll1El.disabled = true;
  }
});

// player 2 roll button functionality
btnRoll1El.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `images/dice-${dice}.png`;
  console.log(dice);
  // if (dice !== 1) {
  score[1] = score[1] + dice;
  score1El.textContent = score[1];
  diceEl.classList.remove("hidden");
  btnRoll0El.disabled = false;
  btnRoll1El.disabled = true;
  btnRoll0El.classList.add("player--active");
  btnRoll1El.classList.remove("player--active");
  if (score[1] >= 30) {
    winnerBoardEl.textContent = "Player 2 Wins";
    winnerBoardEl.classList.remove("hidden");
    diceEl.classList.add("hidden");
    btnRoll0El.classList.remove("player--active");
    btnRoll1El.classList.add("player--active");
    btnRoll0El.disabled = true;
    btnRoll1El.disabled = true;
  }
});

// reset button functionality
btnReset.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  score = [0, 0];
  diceEl.classList.add("hidden");
  btnRoll0El.disabled = false;
  btnRoll1El.disabled = true;
  // choose player
  const player = () => {
    return Math.trunc(Math.random() * 2) + 1;
  };
  const choosePlayer = player();
  console.log(choosePlayer);
  if (choosePlayer === 1) {
    btnRoll0El.disabled = false;
    btnRoll1El.disabled = true;
    btnRoll0El.classList.add("player--active");
    btnRoll1El.classList.remove("player--active");
  } else {
    btnRoll0El.disabled = true;
    btnRoll1El.disabled = false;
    btnRoll0El.classList.remove("player--active");
    btnRoll1El.classList.add("player--active");
  }
  winnerBoardEl.classList.add("hidden");
});
