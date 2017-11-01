//back-end logic
function Player (active, score) {
  this.active=active;
  this.score =score;
}


// var rollScore= 0;

Player.prototype.totalScore = function (randomNumber) {
  var turnArray=[];
  function add (a,b) {
    return a + b;
  }
  if (randomNumber === 1) {
   var rollScore = 0;
 } else {
   var rollScore= randomNumber;
   turnArray.push(rollScore);
   this.score += turnArray.reduce(add, 0);
 }
}


//user-interface logic
$(document).ready(function () {
  var playerOne = new Player (true, 0);
  var playerTwo = new Player (false, 0);
  $(".roll").click(function () {
    event.preventDefault();

    debugger;
    var random = Math.floor(Math.random() * 6) + 1;

    alert (playerOne.totalScore(random));





    // if (random === 1) {
    //   var rollScore=0;
    // } else if (random >= 2) {
    //  var rollScore = random;
    //  userOneArray.push(rollScore);
    // }

  //
  // $(".hold").click(function() {
  //   event.preventDefault();
  //
  //
  //
  //   // var rollArray=[];
  //   // rollArray.push(newRoll.rollValue);


    // $(".thisRoll").text(rollScore);



  });
});
