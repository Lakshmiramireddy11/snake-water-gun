

let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.getElementById('msg');
 userScoreDisplay=document.getElementById('user-score')
 compScoreDisplay=document.getElementById('computer-score')


const genCompChoice = () => {
   let options = ['snake', 'water', 'gun'];
   let randInx = Math.floor(Math.random() * 3);
   return options[randInx];
}

const showWinner = (winner) => {
    if (winner === 'user') {
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = 'green';
        userScore++;
    } else if (winner === 'comp') {
        msg.innerText = 'You Lose!';
        msg.style.backgroundColor = 'red';
        compScore++;
    } else {
        msg.innerText = 'Game was draw';
        msg.style.backgroundColor = '#081b31';
    }
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
}

const playGame = (userChoice) => {
    console.log("userChoice=", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice=", compChoice);
    if (userChoice === compChoice) {
        showWinner('draw');
    } else if ((userChoice === 'snake' && compChoice === 'water') ||
               (userChoice === 'water' && compChoice === 'gun') ||
               (userChoice === 'gun' && compChoice === 'snake')) {
        showWinner('user');
    } else {
        showWinner('comp');
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

