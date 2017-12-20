var TwoFer = function (name) {};

TwoFer.prototype.twoFer = function (who) {
  //Reduce statement with ternary operator
  var who = (who == undefined) ? "you" : who;
  return "One for " + who + ", one for me.";
};

module.exports = TwoFer;
