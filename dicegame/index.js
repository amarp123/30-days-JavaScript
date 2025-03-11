var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice" + randomNumber1 + ".png";

var randomimagesource="images/" + randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);



var randomNumber2=Math.floor(Math.random()*6)+1;



var randomimagesource2="images/dice" + randomNumber2 +".png";


document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


//console.log(randomNumber1);
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player 1 won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}