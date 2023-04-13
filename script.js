'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const scrore1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const bntNewGame = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerEl = document.querySelector('.player');
let currNum, activePlayer, score, isPlaying;

const init = function () {
  currNum = 0;
  activePlayer = 0;
  score = [0, 0];
  isPlaying = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  scrore1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const SwitchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currNum = 0;
  // if it exist it will be remove, and will be created if it's not
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const activate = () => {};
bntRoll.addEventListener('click', () => {
  if (isPlaying) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //save the sum
      currNum += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currNum;
    } else {

      SwitchPlayer();
    }
  }
});

bntHold.addEventListener('click', () => {
  if (isPlaying) {
    score[activePlayer] += currNum;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //check if score < 100
    if (score[activePlayer] >= 50) {
      isPlaying = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`);

      document.querySelector('.player').classList.remove('player--active');
    } else {
    }
    //switch to another player
    SwitchPlayer();
  }
});

bntNewGame.addEventListener('click', () => {
  init();
});
