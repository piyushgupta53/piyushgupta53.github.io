const startCoordinate = document.getElementById('startCounter');
const currentCoordinate = document.getElementById('currentCounter');
const endMessage = document.getElementById('endMessage');
const clicksCounter = document.getElementById('clicksCounter');
const highscoreCounter = document.getElementById('highscoreCounter');

let arrX = [];
let arrY = [];
let noOfClicks = 0;
let previousY = null;

// Add event listener to the playground
document.getElementById('playground').addEventListener('click', gameplay);

function gameplay(e) {
  let valueX = e.offsetX;
  let valueY = e.offsetY;

  arrX.push(valueX);
  arrY.push(valueY);
  endMessage.style.display = "none";

  startCoordinate.textContent = `${arrX[0]}`;
  currentCoordinate.textContent = `${valueX}`;

  // Convert textContent to integers before comparison
  if (parseInt(startCoordinate.textContent) === parseInt(currentCoordinate.textContent)) {
    // Only increment the click count if the Y coordinate has changed
    if (previousY === null || previousY !== valueY) {
      noOfClicks++;
      previousY = valueY;
      document.getElementById('correct').play()
    }
    clicksCounter.innerText = noOfClicks;
  } else {
    // Convert innerText to an integer before comparison
    if (noOfClicks > parseInt(highscoreCounter.innerText)) {
      clicksCounter.innerText = 0;
      highscoreCounter.innerText = noOfClicks;
      previousY = null;
    } else {
      clicksCounter.innerText = 0;
      previousY = null;
    }
    gameOver();
  }
}

function gameOver() {
  startCoordinate.textContent = 0;
  currentCoordinate.textContent = 0;
  arrX = [];
  arrY = [];
  noOfClicks = 0;
  previousY = null;
  endMessage.style.display = "block";
  document.getElementById('wrong').play()
}
