'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '❤correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const x = function () {
//   console.log(23);
// };

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.again').addEventListener('click', function () {
    //   console.log(document.querySelector('.guess').value);
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'start guessing  game 😎';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // document.querySelector('.score').textContent = 0;
    // document.querySelector('.number').textContent = number;

    // document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.width = '15rem';
  });

  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } //guess crt
  else if (guess === number) {
    document.querySelector('.message').textContent = '❤correct Number!';
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 😎';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game 😎';
      document.querySelector('.score').textContent = 0;
    }
  } //low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low😣';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game 😎';
      document.querySelector('.score').textContent = 0;
    }

    // document.querySelector('.message').textContent = 'Too low😣';
    // score = score - 1;
    // document.querySelector('.score').textContent = score;
  }
});
