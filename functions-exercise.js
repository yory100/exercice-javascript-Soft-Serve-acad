/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

//SOLUTION
/*
let min = ( value1, value2 ) => value1 < value2 ? value1 : value2;

console.log(min(1,-4));
*/

/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether 
it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter 
(a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

//SOLUTION
/*
function isEven( num ) {

    if ( num == 0 ) return true;
    if ( num == 1 ) return false;
    if ( num < 0 ) return isEven(-num);

    return isEven ( num - 2 );
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string 
containing only one character (for example, "b"). The first character has position 0, which causes the last one to be 
found at position string.length - 1. In other words, a two-character string has length 2, and its characters have 
positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” 
characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the 
character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this 
new function.
*/

//SOLUTION
/*
function countBs ( str ) {

    numberCount = 0;

    for (let i = 0; i < str.length; i++) {
        if ( str[i] === "B" ) numberCount++;
        
    }

    return numberCount;
}

function countChar ( str, strCounted ) {

    numberCount = 0;

    for (let i = 0; i < str.length; i++) {
        if ( str[i] === strCounted ) numberCount++;
        
    }

    return numberCount;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/

/*
The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that: takes 1 argument: your puppy's age. calculates your dog's age based on 
the conversion rate of 1 human year to 7 dog years. outputs the result to the screen like so: "Your doggie is NN years 
old in dog years!" Call the function three times with different sets of values. Bonus: Add an additional argument to the 
function that takes the conversion rate of human to dog years.
*/

// SOLUTION
/*
function calculateDogAge( puppyAge ) {
    console.log (`Your doggie is ${puppyAge * 7} years old in dog years!`);
}

calculateDogAge(8);
*/

/*
Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, 
or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

//SOLUTION
/*
function palindrome (str) {

    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if ( str[i] === str[j] ) continue
        else return false;  
    }

    return true;
}

console.log(palindrome('madam'));
console.log(palindrome('nurses'));
*/

/*
Write a JavaScript function that returns a passed string with letters in alphabetical order
*/


//SOLUTION
/*
// function strAlphabetical(str) {
//     let arrCahrs = [...str];
//     arrCahrs.sort();
//     return arrCahrs   
// }

let strAlphabetical = str => [...str].sort();

console.log(strAlphabetical('fgtrasbnm'));
*/

/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each 
word of the string in upper case
*/

//SOLUTION
/*
let toCapitalise = str => arrCahrs = str.split( ' ' ).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

console.log(toCapitalise('Ghopt dfftd fghdf hhhgtks'));
console.log(toCapitalise('Oppa tui dobre stana'));
*/