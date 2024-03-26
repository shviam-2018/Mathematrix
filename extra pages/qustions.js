let score = 0;
let timer = 60;
let intervalId;
let correctAnswer;
let highScore = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 9) + 2; 
    const num2 = Math.floor(Math.random() * 9) + 2;
    correctAnswer = num1 * num2;
    document.getElementById('question').innerText = `Question: ${num1} x ${num2} = ?`;
}

function checkAnswer() {
    if (timer > 0) { // Check if the timer is still running
        const userAnswer = parseInt(document.getElementById('answer').value);
        if (userAnswer === correctAnswer) {
            score += 10;
            document.getElementById('score').innerText = score;
        }
        document.getElementById('answer').value = ''; // Clear the input field
        generateQuestion(); // Generate a new question regardless of the answer being correct or not
    }
}

function development() {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer === "110308") {
        score += 100;
        document.getElementById('score').innerText = score;
        timer = 5;
    }
}

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timer--;
    document.getElementById('timer').innerText = timer;
    if (timer === 0) {
        clearInterval(intervalId);
        endGame();
    }
}

function endGame() {
    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = highScore;
    }
    // Display the after game status
    document.getElementById('after-game-status').style.display = 'block';
    alert(`Time's up! Your final score is ${score}`);
    // You can redirect the user to another page or perform any other action here
}

// Initialize the first question and start the timer
generateQuestion();
startTimer();

// Add event listener for the Enter key
document.getElementById('answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        checkAnswer();
    }
});