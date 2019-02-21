/*
Can someone go to the cinema
Check if the person can go to the cinema.

Here are the rules: The visitor can go to the cinema if is 12 years or older or if he is accompanied by his parrents.

Please finish the program:

var age = 11;
var accompanied = true;
...
*/

//SOLUTION
/*
var age = 11;
var accompanied = true;

if (age >= 12 && accompained === true) {
    console.log('You can go to the cinema!')
}else {
    console.log('Sorry, you can\'t go to the cinema' );
}
*/

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/

//SOLUTION
/*
let hash = '#';
let triangle = '';

for (let i = 0; i < 7; i++) {
    triangle += hash; 
    console.log(triangle);  
}
*/

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

//SOLUTION
/*
let divisibleBy5 = num => num % 5 == 0;

let divisibleBy3 = num => num % 3 == 0;

for (let i = 1; i <= 100; i++) {
    
    if ( divisibleBy5(i) == true && divisibleBy3(i) == true ) { 
        console.log('FizzBuzz');
        continue;
    }
    else if ( divisibleBy3(i) ) {
        console.log('Fizz');
        continue;
    }
    else if ( divisibleBy5(i) == true && divisibleBy3(i) == false ) {
        console.log('Buzz');
        continue;
    } 
    
    console.log(i);
}
*/
/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works 
for any size, outputting a grid of the given width and height.
*/

//SOLUTION
/*
let size = 8;
let hash = '#';
let empty = ' ';

for (let i = 0; i < size; i++) {
    let cstr = '';
    for (let j = 0; j < size; j++) {
        if ( (j + i) % 2 == 0 ) cstr += empty;
        else cstr += hash;
    }
    console.log(cstr + '\n');
}
*/