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

Player.prototype.newTurnScore = function (roll) {
  if (roll === 1) {
    this.turnScore = 0;
    return this.turnScore;
  } else {
  turnScoreArray.push(roll);

  var turnScoreTotal = turnScoreArray.reduce(add, 0);
  this.turnScore = turnScoreTotal;
  return this.turnScore;
}

};




// user-interface logic
$(document).ready(function() {
  $(".roll").click(function() {
    var playerOne = new Player (true,0,0);
    event.preventDefault();
debugger;
    var rollScore = Math.floor(Math.random() * 6) + 1;

    var currentScore = playerOne.newTurnScore(rollScore);

    $(".playerOneRollScore").text(rollScore);
    $(".playerOneTurnScore").text(currentScore);
    $(".playerTwoRollScore").text(rollScore);
    $(".playerTwoTurnScore").text(currentScore);

  });
});
