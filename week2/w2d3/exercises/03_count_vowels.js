/*

  Write a function countVowels that counts the total number of vowels present in a string.
  You can include y in this example and assume that all letters will be lowercase.

*/

function countVowels(letters) {
    // var lettersArr = letters.split('')
    // singleLetters = lettersArr.join();
    var vowelsRegExp = /[aeiouy]/gi;
    var vowelsArr = letters.match(vowelsRegExp);

    return vowelsArr.length;
    console.log(vowelsArr.length);
}
countVowels('cat dog elephant monkey');





//TESTS - do not change these

console.log('######### Test for countVowels("abcdefghijklmnopqrstuvwxyz"): ' + (countVowels("abcdefghijklmnopqrstuvwxyz") === 6));
console.log('######### Test for countVowels("cat dog elephant monkey"): ' + (countVowels("cat dog elephant monkey") === 8));
