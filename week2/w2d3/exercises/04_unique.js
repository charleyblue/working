
/*

  Write a function that given an array of numbers, returns another array of only the unique numbers.
  You are going to remove the duplicate numbers from the array.

*/

function uniqueNumbers(nums) {
    var newNumsArray = [];
    for (var i = 0; i < nums.length; i++) {
        if (newNumsArray.indexOf(nums[i]) === -1){
            newNumsArray.push(nums[i]);
        }
    }
    return newNumsArray;
}
uniqueNumbers([5, 3, 1, 5, 3, 1]);



//TESTS - do not change these

console.log('######### Test for uniqueNumbers([5, 5, 5, 5]): ' + uniqueNumbers([5, 5, 5, 5]));
console.log('######### Test for uniqueNumbers([1, 2, 1, 3, 3]): ' + uniqueNumbers([1, 2, 1, 3, 3]));
