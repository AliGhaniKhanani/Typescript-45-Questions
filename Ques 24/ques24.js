// Tests for equality and inequality with strings:
var fruit1 = 'apple';
var fruit2 = 'banana';
console.log("Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 == 'apple');
console.log("Is fruit2 not equal to 'cherry'? I predict True.");
console.log(fruit2 != 'cherry');
// Tests using the lower case function:
var text1 = 'Hello, World!';
var text2 = 'hello, world!';
console.log("Is text1 in lowercase equal to text2? I predict True.");
console.log(text1.toLowerCase() === text2);
console.log("Is text1 in lowercase not equal to 'hello, world!'? I predict False.");
console.log(text1.toLowerCase() != 'hello, world!');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 42;
var num2 = 55;
console.log("Is num1 equal to 42? I predict True.");
console.log(num1 === 42);
console.log("Is num2 greater than 60? I predict False.");
console.log(num2 > 60);
console.log("Is num1 less than or equal to 42? I predict True.");
console.log(num1 <= 42);
// Tests using "and" and "or" operators:
var isMorning = true;
var isRaining = false;
console.log("Is it morning and not raining? I predict True.");
console.log(isMorning && !isRaining);
console.log("Is it morning or raining? I predict True.");
console.log(isMorning || isRaining);
