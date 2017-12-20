//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


//Assign the input value to this particular object
var Year = function(input) {
    this.yr = input;
};

//Returns a "truthy" or "falsy" statement
Year.prototype.isLeap = function() {
    return this.yr % 4 == 0 && (this.yr % 100 !== 0 || this.yr % 400 === 0);
};

module.exports = Year;
