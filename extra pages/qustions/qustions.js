let score = 0;
let timer = 60;
let intervalId;
let correctAnswer;
let highScore = 0;

// Function to set a cookie with the given name, value, and expiration date
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to read cookie with the given name
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Load high score from cookie when the page loads
window.onload = function() {
    highScore = parseInt(getCookie("highScore")) || 0;
    document.getElementById('high-score').innerText = highScore;
};

// Function to generate a question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 9) + 2; 
    const num2 = Math.floor(Math.random() * 9) + 2;
    correctAnswer = num1 * num2;
    document.getElementById('question').innerText = `Question: ${num1} x ${num2} = ?`;
}

// Function to check the user's answer
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

// Function to start the timer
function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    timer--;
    document.getElementById('timer').innerText = timer;
    if (timer === 0) {
        clearInterval(intervalId);
        endGame();
    }
}

// Function to end the game
function endGame() {
    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = highScore;
        // Save the new high score in a cookie
        setCookie("highScore", highScore, 30); // Expires in 30 days
    }
    // Display the after game status
    document.getElementById('after-game-status');
    alert(`Time's up! Your final score is ${score}`);
    // You can redirect the user to another page or perform any other action here
}

// Initialize the first question and start the timer
generateQuestion();
startTimer();

// Play again 
function playAgain() {
    score = 0;
    timer = 60;
    document.getElementById('score').innerText = score;
    document.getElementById('timer').innerText = timer;
    clearInterval(intervalId);
    generateQuestion();
    startTimer();
}

// Add event listener for the Enter key, so you can submit the answer by pressing Enter to reduce wast
document.getElementById('answer').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        checkAnswer();
    }
});