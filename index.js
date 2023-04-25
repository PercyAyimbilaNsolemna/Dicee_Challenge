//Random number generation  and image change for player 1 
var randomNumber1 = Math.random() * 6;

randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage1Source = "images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1Source);

/*

var paragraph1 = document.querySelectorAll("p")[1];

paragraph1.innerHTML = randomNumber1;

*/

//Random number generation and image change for player 2

var randomNumber2 = Math.random() * 6;

randomNumber2 = Math.floor(randomNumber2) + 1; 

var randomImage2Source = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2Source);

/*

var paragraph2 = document.querySelectorAll("p")[3];

paragraph2.innerHTML = randomNumber2;

*/

//Conditional to alert the winner of the game 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
