let hitValue = 0; // The target value to be hit
let timer = 60; // Initial timer value in seconds
let score = 0; // Initial score
let highScore = 0; // Initial high score
let timerInterval; // Variable to store the timer interval

// Function to create multiple bubbles with random numbers
function makeBubbles() {
  let bubblesHTML = "";
  for (let i = 0; i <= 210; i++) {
    let num = Math.floor(Math.random() * 10); // Generate random number between 0 and 9
    bubblesHTML += `<div class="bubble">${num}</div>`; // Add bubble HTML with random number
  }
  document.querySelector('.bottom-bar').innerHTML = bubblesHTML; // Update bottom-bar with bubbles
}

// Function to run the timer and update the timer display
function runTimer() {
  timerInterval = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector('#timerVal').textContent = timer; // Update timer display
    } else {
      clearInterval(timerInterval); // Stop timer when it reaches 0
      endGame(); // End game when timer reaches 0
    }
  }, 1000);
}

// Function to set a new random hit value
function setHitValue() {
  hitValue = Math.floor(Math.random() * 10); // Generate random number between 0 and 9
  document.querySelector('#HitVal').textContent = hitValue; // Update hit value display
}

// Function to increment the score
function incrementScore() {
  score += 10;
  document.querySelector('#scoreVal').textContent = score; // Update score display
}

// Function to decrement the score
function decrementScore() {
  score -= 10;
  if (score <= 0) {
    score = 0; // Ensure score does not go below 0
    timer = 0; // Set timer to 0 when score reaches 0
    document.querySelector('#timerVal').textContent = timer; // Update timer display
    endGame(); // End game if score reaches 0
  }
  document.querySelector('#scoreVal').textContent = score; // Update score display
}

// Function to handle game over state
function endGame() {
  clearInterval(timerInterval); // Clear the timer interval
  document.querySelector('.bottom-bar').style.display = 'none'; // Hide bubbles
  document.querySelector('#gameOver').style.display = 'block'; // Show game over message
  document.querySelector('#finalScore').textContent = score; // Show final score
  // if (score > highScore) {
  //   highScore = score; // Update high score if current score is higher
  // }
  document.querySelector('#highScore').textContent = highScore; // Show high score
}

// Function to reset and restart the game
function resetGame() {
  clearInterval(timerInterval); // Clear any existing timer interval
  timer = 60; // Reset timer
  score = 0; // Reset score
  document.querySelector('#timerVal').textContent = timer; // Update timer display
  document.querySelector('#scoreVal').textContent = score; // Update score display
  document.querySelector('.bottom-bar').style.display = 'flex'; // Show bubbles
  document.querySelector('#gameOver').style.display = 'none'; // Hide game over message
  makeBubbles(); // Create new bubbles
  setHitValue(); // Set new hit value
  runTimer(); // Start timer
}

// Event listener for clicking bubbles
document.querySelector('.bottom-bar').addEventListener('click', function(event) {
  let clickedNum = Number(event.target.textContent); // Get number of clicked bubble
  if (clickedNum === hitValue) {
    incrementScore(); // Increment score if clicked number matches hit value
    setHitValue(); // Set new hit value
  } else {
    decrementScore(); // Decrement score if clicked number does not match hit value
  }
});

// Event listeners for play again and reset buttons
document.querySelector('#playAgain').addEventListener('click', resetGame);
document.querySelector('#resetGame').addEventListener('click', resetGame);
document.querySelector('#resetButton').addEventListener('click', resetGame);

// Initial game setup
resetGame();