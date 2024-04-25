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
let minLength = 6;

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

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function getLongerStrings(strings, minLength) {
    return strings.filter(function(strings){
        return strings.length > minLength
    })
}

console.log(getLongerStrings(strings, minLength));//This will return an array that has grater than 6 letter in this case it will print ['technology', 'professional', 'determine']

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function countUpToN(n, current = 1) {
    console.log (current);
    if (current < n) {
        countUpToN(n, current + 1);
    }
}

countUpToN(10);





