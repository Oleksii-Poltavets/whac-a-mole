const score = document.querySelector('#score');
const timer = document.querySelector('#timeleft');
const squares = document.querySelectorAll('.square');
const startButton = document.querySelector('#go');
const mole = document.querySelector('.mole');
let result = 0;
let hitPosition;
let timeLeft = 30;
let moleTimer = null;
let countDownTimer = null;
startButton.addEventListener('click', moveMole);

function randomSquare() {
    squares.forEach(square => square.classList.remove('mole'));
    const randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

function moveMole() {
    startButton.removeEventListener('click', moveMole);
    moleTimer = setInterval(randomSquare, 500);
    countDownTimer = setInterval(countDown, 1000);
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function countDown() {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft <= 0) {
        clearInterval(countDownTimer);
        clearInterval(moleTimer);
        timer.textContent = 0;
        alert(`Game over, your score ${result}`);
        startButton.addEventListener('click', moveMole);
        result = 0;
        timeLeft = 30;
    }
}

