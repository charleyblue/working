/*

  Write a function that returns the longest word in a sentence
  TIP: check out array.split()

*/

function longestWord(sentence) {
    var wordSplit = sentence.split(' ');
    var longWord = '';

    for (var i = 0; i < wordSplit.length; i++) {
         if (wordSplit[i].length > longWord.length) {
             longWord = wordSplit[i];
         }
    }
    return longWord;
}
//longestWord("Welcome to the newspaper");

//TESTS - do not change these
console.log('######### Test for longestWord("Welcome to the newspaper"): ' + (longestWord("Welcome to the newspaper") === 'newspaper'));
console.log('######### Test for longestWord("dog dinosaur cat"): ' + (longestWord("dog dinosaur cat") === 'dinosaur'));
