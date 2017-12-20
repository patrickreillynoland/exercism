var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
    var dnaArray = dna.split('');
    var rna = '';

    for (var letter of dnaArray) {
        switch(letter) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                throw Error("Invalid input");
        }
    }

    return rna;
}

module.exports = DnaTranscriber;