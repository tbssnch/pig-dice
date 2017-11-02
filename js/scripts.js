//back-end logic
function Player (activePlayer, turnScore, gameScore) {
  this.activePlayer= activePlayer;
  this.turnScore = turnScore;
  this.gameScore = gameScore;
}

var turnScoreArray=[];
function add (a,b) {
  return a+b;
}

Player.prototype.newTurn = function (roll) {
  if (roll === 1) {
    this.turnScore = 0;
    return this.turnScore;
  } else {
  turnScoreArray.push(roll);

  this.turnScore = turnScoreArray.reduce(add, 0);
  // return this.turnScore;

  this.gameScore =+ this.turnScore;
  return this.gameScore;
}

// Player.prototype.newGameTotal = function (rollScore) {
//   this.gameScore = this.gameScore + this.turnScore;
//   return this.gameScore;
// }

};




// user-interface logic
$(document).ready(function() {
  $(".roll").click(function() {
    var playerOne = new Player (true,0,0);
    event.preventDefault();
// debugger;
    var rollScore = Math.floor(Math.random() * 6) + 1;

    var currentScore = playerOne.newTurn(rollScore);

    $(".playerOneRollScore").text(rollScore);
    $(".playerOneTurnScore").text(currentScore);
    $(".playerOneScore").text(playerOne.gameScore);



    // $(".playerTwoRollScore").text(rollScore);
    // $(".playerTwoTurnScore").text(currentScore);

  });
});
