'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let highScore = 0;
let score = 8;
const colors = [
  '#b32727',
  '#9d2222',
  '#861d1d',
  '#701919',
  '#5a1414',
  '#3f1919',
  '#430f0f',
  '#2d0a0a',
];
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  if (!guess) {
    // NO INPUT
    displayMessage('😡No number!');
  } else if (guess === secretNumber) {
    // CORRECT INPUT
    displayMessage('🎂Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔥 Too High!' : '❄️ Too Low!');
      score--;
      document.querySelector('body').style.backgroundColor = colors[score];
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lose!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 8;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
