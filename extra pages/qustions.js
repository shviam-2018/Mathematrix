
let score = 0;
let timer = 60;
let intervalId;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 9) + 2; 
    const num2 = Math.floor(Math.random() * 9) + 2;
    document.getElementById('question').innerText = `Question: ${num1} x ${num2} = ?`;
    return num1 * num2;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = generateQuestion();
    if (userAnswer === correctAnswer) {
        score += 10;
        document.getElementById('score').innerText = score;
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
    alert(`Time's up! Your final score is ${score}`);
    // You can redirect the user to another page or perform any other action here
}

// Initialize the first question and start the timer
generateQuestion();
startTimer();
