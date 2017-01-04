var letterMap = [],
    theWord;

if (process.argv.length > 2) {
    theWord = process.argv[2];
};

function countLetters(word) {
    if (word === null) {
        return 'no word specified';
    }
    if (word === undefined) {
        return 'no word defined';
    }
    if (typeof word !== 'string') {
        return 'string required to run this program';
    }
    for (var i = 0; i < word.length; i++ ) {
        var letter = word[i];
        if (letterMap[letter]) {
            letterMap[letter]++;
        } else {
            letterMap[letter] = 1;
        }
    }
    return letterMap;
}
if (theWord !== null || theWord !== undefined) {
    console.log(countLetters(theWord));
}
var word = 'mississippi';
countLetters (word);
