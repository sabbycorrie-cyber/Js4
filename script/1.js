// Guess the random number 

const guessNumberGame = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    let userGuess = 0;

    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (isNaN(userGuess)) {
            alert("Please enter a number!");
        } else if (userGuess < randomNumber) {
            alert("Too low!");
        } else if (userGuess > randomNumber) {
            alert("Too high!");
        }
    }
    alert(`Congratulations! The number was ${randomNumber}`);
};

guessNumberGame();