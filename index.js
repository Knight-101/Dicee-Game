function play(){
  var a= Math.floor(Math.random()*6+1);
  var b = Math.floor(Math.random()*6+1);

  if (a===b) {
    document.querySelector("h1").innerHTML= "Its a draw!!";
  }
  if (a>b) {
    document.querySelector("h1").innerHTML= "🚩Player1 wins!!";
  }
  if (a<b) {
    document.querySelector("h1").innerHTML= "Player2 wins!!🚩";
  }
  document.querySelector("img.img1").setAttribute("src", "images/dice"+a+".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice"+b+".png");


}
