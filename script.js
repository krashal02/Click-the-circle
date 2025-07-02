const startBtn = document.getElementById('start-btn');
const circle = document.getElementById('circle');
const gameArea = document.getElementById('game-area');
const scoreboard = document.getElementById('scoreboard');
const timerDisplay = document.getElementById('timer');
const gameOverOverlay = document.getElementById('game-over-overlay');
const finalScoreText = document.getElementById('final-score-text');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let timeLeft = 30;
let timerInterval;

function moveCircle() {
  const maxX = gameArea.clientWidth - circle.offsetWidth;
  const maxY = gameArea.clientHeight - circle.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreboard.textContent = 'Score: ' + score;
  timerDisplay.textContent = 'Time Left: ' + timeLeft + 's';
  gameOverOverlay.style.display = 'none';
  startBtn.style.display = 'none';
  circle.style.display = 'block';

  moveCircle();

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = 'Time Left: ' + timeLeft + 's';

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

circle.addEventListener('click', () => {
  score++;
  scoreboard.textContent = 'Score: ' + score;
  moveCircle();
});

function endGame() {
  clearInterval(timerInterval);
  circle.style.display = 'none';
  timerDisplay.textContent = 'Time Left: 0s';

  finalScoreText.textContent = `🎉 Game Over! Your final score: ${score}`;
  gameOverOverlay.style.display = 'flex';
}

restartBtn.addEventListener('click', () => {
  startGame();
});

startBtn.addEventListener('click', startGame);
