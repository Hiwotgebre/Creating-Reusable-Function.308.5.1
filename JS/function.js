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

countUpToN(10);// this print whole numbers start from 1 to 10

// Paret 2: Thinking Methodically
const person = [
    {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'},
    {id: '48', name: 'Barry', occupation: 'Runner', age: '25'},
    {id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19'},
    {id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58'},
    {id: '7', name: 'Bilbo', occupation: 'None', age: '111'},
];

// Sort the array by Age
function sortByAge(person) {
    return person.sort((a, b) => Number(a.age) - Number(b.age));
}

console.log(sortByAge(person));//This display sorting age from list to greatest

// Filter the array to remove entries an age greater than 50
function filterByAge(person){
    return person.filter(person => Number(person.age) <= 50);
}

console.log(filterByAge(person)); //The out put shows filtering the ages and display who is less than 50 years old

// Map the array to change the "Occupation" key to "job" and increment every age by 1
function changeAndIncrementAge(person) {
    return person.map(function(person){
        return{
            ...person, //Spread operator to copy properties from the original person object
            job: person.occupation, //change occupation to job
            age: String(Number(person.age) + 1) // Increament age and change into string
        };
    });
}
console.log(changeAndIncrementAge(person));//the out put display change occupation into job and display age as a string

// Calculate the sum and average of ages
function averageAge(person) {
    const totalAge = person.reduce(function(total, person) {
        return total + Number(person.age);
    }, 0);
    return totalAge / person.length
}

console.log(averageAge(person)) //This out put display average of a list of people





