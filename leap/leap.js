var Year = function(input) {
    this.yr = input;
};

Year.prototype.isLeap = function() {
    return this.yr % 4 == 0 && (this.yr % 100 !== 0 || this.yr % 400 === 0);
};

module.exports = Year;
