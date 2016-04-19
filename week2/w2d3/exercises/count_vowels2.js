//Use the indexOf() method to iterate through string
function countVowels(letters) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y' ];
    var count = 0;
    for (var i = 0; i < letters.length; i++) {
        if (vowels.indexOf(letters[i]) !== -1) {
            //indexOf() returns -1 for all non matched characters
            count ++;
        }
    }
    return count;
}
countVowels("Dog's life is rad!");


console.log('######### Test for countVowels("abcdefghijklmnopqrstuvwxyz"): ' + (countVowels("abcdefghijklmnopqrstuvwxyz") === 6));
console.log('######### Test for countVowels("cat dog elephant monkey"): ' + (countVowels("cat dog elephant monkey") === 8));
