var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var imag1 = "dice"+ randomNumber1 +".png";
var imag2 = "dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src",imag1);
document.querySelector(".dice .img2").setAttribute("src",imag2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "🏆 player 1 won";
}

if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML= "player 2 won 🏆";
}

if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML= "Draw";
}
