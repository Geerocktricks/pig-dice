// back end
var turnTotal1 = 0;
var turnTotal2 = 0;

var random;
var dieCount;
var newPlayer1;
var newPlayer2;

function Player (name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

function getRandomNumber(lower,upper) {
  return Math.floor(Math.random()*(upper-lower + 1)) + lower;
  return dieCount;
}
