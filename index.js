var randomnumber1 = Math.floor(Math.random()*6) +1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random()*6) +1;
var randomDiceimage = "dice" + randomnumber2 + ".png";
var randomImagesource = "images/" + randomDiceimage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesource);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
if (randomnumber2 == randomnumber1) {
    document.querySelector("h1").innerHTML = "That is a Tie";
}