//variables
let btnGuess = document.getElementById("btnGuess");
let output = document.getElementById("output");
let guess = document.getElementById("guess");
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);
let guesses = 0;

btnGuess.addEventListener('click', guessNumber);

//functions

 function guessNumber() {
    guesses++;
    let input = document.getElementById("guess").value;
    console.log(input);
     
    if (guess < number) {
        output.innerHTML = "Your guess is too low, try again!";
    }
    else if (guess > number) {
        output.innerHTML = "Your guess is too high, try again!";
    }
}