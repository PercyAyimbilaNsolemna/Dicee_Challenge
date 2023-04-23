//Random number generation for player 1 
var randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

//Random number genration for player 2

var randomNumber2 = Math.random() * 6;

randomNumber2 = Math.floor(randomNumber2) + 1;

//Alerting the player who won in the h1 element

if (randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "Player 1 wins!"; 
}
else if (randomNumber1 < randomNumber2) {
    
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}

//Changing the dice of the players based on the random number generated

var image1 = document.querySelector(".img1");

var player1Score = document.querySelector(".score1");

if (randomNumber1 === 1) {

    image1.setAttribute("src", "images/dice1.png");
    player1Score.innerHTML = 1;

}
else if (randomNumber1 === 2){

    image1.setAttribute("src", "images/dice2.png");
    player1Score.innerHTML = 2;
}

else if (randomNumber1 === 3){

    image1.setAttribute("src", "images/dice3.png");
    player1Score.innerHTML = 3;
}
else if (randomNumber1 === 4){

    image1.setAttribute("src", "images/dice4.png");
    player1Score.innerHTML = 4;
}
else if (randomNumber1 === 5){

    image1.setAttribute("src", "images/dice5.png");
    player1Score.innerHTML = 5;
}
else {

    image1.setAttribute("src", "images/dice6.png");
    player1Score.innerHTML = 6;
}

var image2 = document.querySelector(".img2");

var player2Score = document.querySelector(".score2");


if (randomNumber2 === 1) {

    image2.setAttribute("src", "images/dice1.png");
    player2Score.innerHTML = 1;

}
else if (randomNumber2 === 2){

    image2.setAttribute("src", "images/dice2.png");
    player2Score.innerHTML = 2;
}

else if (randomNumber2 === 3){

    image2.setAttribute("src", "images/dice3.png");
    player2Score.innerHTML = 3;
}
else if (randomNumber2 === 4){

    image2.setAttribute("src", "images/dice4.png");
    player2Score.innerHTML = 4;
}
else if (randomNumber2 === 5){

    image2.setAttribute("src", "images/dice5.png");
    player2Score.innerHTML = 5;
}
else {

    image2.setAttribute("src", "images/dice6.png");
    player2Score.innerHTML = 6;
}


