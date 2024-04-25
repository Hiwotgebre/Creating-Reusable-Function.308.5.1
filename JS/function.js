//  Paret: 1 Thinking Functionally
// Take an array of numbers and return the sum

let nums = [2, 4, 6, 8];

function sumArray(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sumArray(nums));//this returns 20

// Take an array of numbers and return the average

function avgArray(nums) {
    return sumArray(nums) / nums.length;
}

console.log(avgArray(nums));// this returns 5

// Take an array of strings and return the longest string

let strings =['technology', 'professional', 'reduce', 'determine', 'syntax']

function longestString(strings){
    return strings.reduce(function(longest, current) {
        if (current.length > longest.length) {
            return current //if current string is longer, make it the new longest
        } else{
            return longest// else keep the existing string
        }

    }, "")
}

console.log(longestString(strings));// this returns the longest string which is 'professional'







