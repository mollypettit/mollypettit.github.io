let btnStart = document.getElementById("btnStart");
let results = document.getElementById("results");
let score = 0;
let black;
let red;

btnStart.addEventListener("click", start);

function endGame() {
    if (black == 1 && red == 1) {
        document.getElementById("btnStart").disabled = true;
    }
}
    

function start() {
    let black = Math.floor((Math.random() * 6 + 1));
    let red = Math.floor((Math.random() * 6 + 1));
    blackdice.setAttribute("src", "SampleImages/dice" + black + "_black.png");
    reddice.setAttribute("src", "SampleImages/dice" + red + "_red.png");
    
    
if (blackdice!==1||reddice!==1){
	score += black + red;
	output= "Dice 1 = "+black+", Dice 2 = " +red+ ", your score is " + score;
}


else if (blackdice === reddice && blackdice !==1) {
	score += 100;
	output= "Dice 1 = "+black+", Dice 2 = " +red+ ", your score is " + score;
}

else {
	rolldice.disabled=true;
	output = "Your final score is " +score;
}
    document.getElementById("results").innerHTML = output;
}

function reset() {
    if (blackdice==1 && reddice==1){
        document.getElementById("btnStart").disabled = true;
    }
    
}
