// let size = "xl";

// if (size==="xl"){
//     console.log("Price is Rs. 250");
// }
// else if(size==="l"){
//     console.log("Price is Rs. 200");
// }
// else if(size==="m"){
//     console.log("Price is Rs. 100");
// }
// else{
//     console.log("Price is Rs. 50");
// }

// let str = "Apple";

// if (str.length > 3 && str[0] === "a"){
//     console.log("Good String");
// }
// else{    console.log("Bad String");
// }

// let firstname = prompt("Enter your first name");
// let lastname = prompt("Enter your last name");
// let msg = "Your full name is " + firstname + " " + lastname;
// alert(msg);

// Q.1 Create a number variable num with some value. now, print "good" if the number is divisible by 10 and print "bad" if it is not.
// let num = 20;
// if (num % 10 === 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// Q.2 Take the user's nae & age as a input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age) : name is age years old.
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(name + " is " + age + " years old.");

//Q.3 A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. Fpr a given string print if it is golden or not.
// let str = prompt("Enter a string");
// if ((str[0] === "A" || str[0] === "a") && str.length > 5){
//     console.log("Golden String");
// }else{
//     console.log("Not a Golden String");
// }

//Q.4 Write a program to find the largest of 3 numbers.
// let num1 = 10;
// let num2 = 20;
// let num3 = 15;
// if (num1 > num2 && num1 > num3){
//     console.log(num1 + " is the largest number");
// }else if (num2 > num1 && num2 > num3){
//     console.log(num2 + " is the largest number");
// }else{
//     console.log(num3 + " is the largest number");
// }

//Q.5 Write a program to check if 2 number have the same last digit. Eg. 32 and 47852 have the same last digit, but 21 and 34 do not.
// let num1 = 32;
// let num2 = 47852;
// if (num1 % 10 === num2 % 10){
//     console.log("The numbers have the same last digit");
// }
// else{    console.log("The numbers do not have the same last digit");
// }

// PRACTICE Qs

//Q.1 For the give String
//  let str = "Hello World";
//  console.log(msg.trim().toUpperCase());

//Q.2 For the String -> let name = "ApnaCollege", predict the output for following:
// name.slice(3, 6) -> "naC"
// name.indexOf("na")
// name.replace("Apna","Our")
// let name = "ApnaCollege";
// console.log(name.slice(3, 6));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// name.slice(4).replace("l","t").replace("l","t");

// let month = ["january", "july", "march", "august"]
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("january");
// console.log(month);

// let primary = ["red","yellow","blue"];
// let secondary = ["orange","green","violet"];
// primary.concat(secondary);

// let month = ["january", "july", "march", "august"];
// month.splice(0,2,"july","june");
// console.log(month);

// let lang = ['c','c++','javascript','python','java','c#','sql'];
// lang.reverse();
// lang.indexOf("javascript");

//Q.1 Write a javascript program to get the fisrt n element of an array.[n can be any positive number]
// let arr = [7,9,0,-2];
// let n=3;
// console.log(arr.slice(0,n));

//Q.2 Write a javascript program to get the last n element of an array.[n can be any positive number]
// let arr = [7,9,0,-2];
// let n = 3;
// console.log(arr.slice(arr.length-n));

//Q.3 Write a JavaScript program to check whether a string is blank or not.
// let str = prompt("please enter a string");
// if(str.length == 0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty" );
//     console.log(str);
// }

//Q.4 Write a JavaScript program to test whether the character at the given(character) index is lower case.

// let str = "ApNaCoLlEgE";
// let idx = 3;

// if(str[idx] == str[idx].toLowerCase()){
//     console.log("character is lowercase");
//     console.log(str[idx]);
// }
// else {
//     console.log("character is not lowercase");
// }

//Q.5 Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = prompt("please enter a string");
// console.log("original string = ${str}");
// console.log('string without space = ${str.trim()}')

//Q.6 Write a JavaScript program to check if an element exists in an array or not.

// let arr = ["hello", 'a',23,64,99,-6]
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("element exists in array");
// } else{
//     console.log("element doesn't exist in array");
// }

//Q. Print all odd number(1 to 15)
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }
// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

//Q. Print all even numbers (2 to 10)
// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

//Q. Print the multiplication table for 5
// for(let i=1; i<=10; i++){
//     console.log(i*5);
// }

// let n = prompt("write your number:");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//  let fruits = ["mango","apple","banana","litchi","orange"];
//             for(let i=0; i<fruits.length; i++){
//                 console.log(i, fruits[i]);
//             }

// let heroes = [ ["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
//         for(let i=0; i<heroes.length; i++){
//             console.log(`List #${i}`);
//                for(let j=0; j<heroes[i].length; j++){
//                 console.log(heroes[i][j]);
//                }
//         }

// Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: if arr=[1,2,3,4,5,6,2,3] & num=2
// Result should be arr=[1,3,4,5,6,3]

// let arr = [1, 2, 3, 4, 5, 6.2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         arr.splice(i, 1)
//     }
// }
// console.log(arr);

//Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6

// let number = 287152;
// let count = 0;

// let copy = number;

// whilw(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

//Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum=25

// let number = 287152;
// let sum = 0;

// let copy = number;

// while(copy>0){
//     digit = copy % 10;
//     sum+=digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

//Print the factorial of a number n.

// let n=5;
// let factorial = 1;

// for(let i=1; i<=n; i++){
//     factorial += i;
// }
// console.log(`factorial of ${n} is ${factorial}`);


//Find the largest number in an array with only positive numbers.

// let arr = [2, 5, 10, 4, 2, 7, 1, 9];
// let largest = 0;
// for (let i = 0; i <= arr.length; i++) {
//     if (largest < arr[i]) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

// const post = {
//     username : "@shaynaanjum",
//     content : "this si my #firstPost",
//     likes: 150,
//     reposts : 5,
//     tags: ["@apnacollege","@shayna31"]
// };
//Random Integers between 1 and 10

// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

// Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6.
// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll);

// Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.
// let car = {
//     name: "Honda City",
//     model: "2020",
//     color: "white"
// };
// console.log(car.name);

//Create an object Person with their name, age and city. Edit their city’s original value to change it to “New York”. Add a new property country and set it to the United States
// let person = {
//     name: "Shayna Anjum",
//     age: 21,
//     city: "Lucknow"
// };
// person.city = "New York";
// person.country = "United States";
// console.log(person);

// Create a Function to roll a dice & always display the value of the dice(1 to 6)
// function rollDice(){
//     let diceRoll = Math.floor(Math.random() * 6) + 1;
//     console.log(diceRoll);
// }   
// rollDice();

//Create a Function that print the multiplication table of a given number n. [n can be any positive number]
// function multiplicationTable(n){
//     for(let i=1; i<=10; i++){
//         console.log(i*n);
//     }
// }
// multiplicationTable(5);

// Create a Function that returns the sum of numbers from 1 to n. [n can be any positive number]
// function sumOfNumbers(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(5));

// Create a Fuction that returns the concatenation of all string in an array.
// function concatenateStrings(arr){
//     let result = "";
//     for(let i=0; i<arr.length; i++){
//         result+=arr[i];
//     }
//     return result;
// }
// let arr = ["Hello", " ", "World", "!"];
// console.log(concatenateStrings(arr));

//Write a JavaScript function that returns an array of elements larger than a given number
// function getElementsLargerThan(arr, num) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getElementsLargerThan(arr, 5));

//Write a JavaScript function to extract unique characters from a string. Example: str="abcdabcdefgggh" ans="abcdefgh"
// function extractUniqueCharacters(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (result.indexOf(str[i]) === -1) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// let str = "abcdabcdefgggh";
// console.log(extractUniqueCharacters(str));

//Write an arrow function that return the square of a number 'n'
// const square = (n) => {
//     return n*n;
// }
// console.log(square(5));

// Write a function that prints "Hello World" 5 times at intervals of 2 seconds each.
// let id = printHelloWorld(){
//     setInterval(() => {
//                         console.log("Hello World");
//                  }, 2000); // 2000 milliseconds = 2 seconds
//                         // To stop the interval, you can use clearInterval(intervalId);
// }
// setTimeout(() => {
//     clearInterval(id);
//     console.log("Stopped printing Hello World");
// },10000); // Stop after 10 seconds

//Write an arrow function named array Average that accepts an array of numbers and returns the average of those numbers.
// const arrayAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// let arr = [1, 2, 3, 4, 5];

//Write an arrow function named is Even() that takes a single number as argument and returns whether it is even or not.
// const isEven = (n) => {
//     return n % 2 === 0;
// }
// console.log(isEven(4)); // true
// console.log(isEven(5)); // false

// Qs3.What is the output of the following code:
// const object={
//          message:'Hello,World!',
// 
//       logMessage(){ 
//              console.log(this.message); 
//            }
//};
// setTimeout(object.logMessage,1000);


// let arr = [
//     {
//         name: "Shayna Anjum",
//         age: 21,
//         city: "Lucknow"
//     },
//     {
//         name: "Rahul Kumar",
//         age: 25,
//         city: "Delhi"
//     },
//     {
//         name: "Priya Singh",
//         age: 30,
//         city: "Mumbai"
//     },
// ];
// arr.forEach((person) => {
//     console.log(person.name);
// });

//Filter 
// let nums = [1,2,3,4,5];
// let ans = nums.filter((el) => {
//     return el % 2 === 0;
// });
// console.log(ans);   

//Reduce - Finding Maximum in an array

// let arr = [1,2,3,4,5,6,7,8,9,11,5,19,199];

// let max = -1;

// for(let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, el)=>{
//     if(max<el){
//         return el;
//     } else{
//         return max;
//     }
// });

//Q. Chech if all numbers in our array multiplr of 10 or not.
let nums = [10,20,30,40,50];

let ans = nums.every((el) => el % 10 == 0);

console.log(ans);

//Q. Create a function to find the min number in an array.
// let arr = [1,2,5,7,8,9,99,12,34,56];

// let min = arr.min((min, el) =>{
//     if(min<el){
//         return min;
//     } else{
//         return el;
//     }
// });

//Spread 
let arr = [1,2,3,4,5];
let newArr = [...arr];

let chars = [..."hello"];

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let numbers = [...odd, ...even];