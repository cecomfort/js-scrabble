var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays = ["PURPLE", "PINK", "PURPLE", "PINK", "PURPLE", "PINK", "PURPLE", "PINK", "PURPLE", "PINK"];
  this.scrabble = new Scrabble();
};

Player.prototype.totalScore = function() {
  var totalScore = 0;
  var self = this;
  this.plays.forEach(function(word) {
    totalScore += self.scrabble.score(word);
  })
  return totalScore;
};

Player.prototype.hasWon = function() {
  return ( this.totalScore() >= 100 ) ? true : false;
};

Player.prototype.highestScoringWord = function() {
  return this.scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  topWord = this.highestScoringWord();
  return this.scrabble.score(topWord);
};

var my_player = new Player('Ada');
console.log(my_player.totalScore());
console.log(my_player.hasWon());
console.log(my_player.highestScoringWord());
console.log(my_player.highestWordScore());
