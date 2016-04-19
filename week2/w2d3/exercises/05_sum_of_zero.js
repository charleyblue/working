
/*

  Write a function that finds whether any two elements in the array sum to zero.
  If it does, return true otherwise return false

*/

function containsSumOfZero(nums) {
    var sums = [];
    for (var i = 0; i < nums.length; i++) {
        if (sums.indexOf(nums[i]) + sums.indexOf(nums[i+1] === 0)) {
            //sums.push(nums[i]);
            return true;
        }
    }
    //console.log('Sums of zero' + sums);
    return false;
}

//containsSumOfZero([10, 2, 4, -2, 2]);


//TESTS - do not change these

console.log('######### Test for containsSumOfZero([10, 2, 4, -2, 2]): ' + (containsSumOfZero([2, -2]) === true));
console.log('######### Test for containsSumOfZero([5, 5, 5, 5]): ' + (containsSumOfZero([5, 5, 5, 5]) === false));
