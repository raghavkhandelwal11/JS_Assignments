//1

//The difference betweeen "==" and "===" is that former compares the value of two varibles and later check for both value as well as the  data type of the variables

let a = "12"
let b = 12;

if(a == b) {
    console.log("this is due to '==' operator");
}

if (a === b){
    console.log("this is due to '===' operator");
}


//---------------------------------------------------------------------------------------------------------------------------------

//2 

// spread operator is used to expand the iterable objects to the individual elements and for object literals it enumerates their data into another object with key value pairs


let arr1 = new Array(1, 2, 3, 4, 5);

function func1(a, b, c) {
    console.log(a, b, c);
}

func1(...arr1);


//---------------------------------------------------------------------------------------------------------------------------------


//3

//let and const have their access limited to thier scope only and differce btw let and const is 

// let can be redefined and we are not able to access the let varible like in case of var type due hoising

// in cosnt we are only able to define its value only once and we can only access its value inside its scope only

// var is can be redefiened and redeclared and we can access the var anytime (even befor defining it value) due to hoisting. it is global scope object that means we can access this anytime.


//---------------------------------------------------------------------------------------------------------------------------------


//4


// An environment in which the javascript code runs is what form an execution context.

// The execution context decides what particular piece of code has access to variables, functions, objects, etc.


// Global Execution Context
// Whenever the code runs for the first time or when the code is not inside any function then it gets into the global execution context. There is only one global execution context throughout the execution of code.


// Function Execution Context
// Whenever the code execution found a function it creates a new function execution contexts


// there are basically two phases when an execution context is formed
// 1. creation phase
// 2. execution phase




//---------------------------------------------------------------------------------------------------------------------------------


//5 

// 1. creation phase: memory for all variables and function scopes is reserved


// 2. execution phase: here the line by line execution with value allocation and and function invocation takes place



//---------------------------------------------------------------------------------------------------------------------------------

//6

// First Class function 


// FCFs are those functions which can be passed as an argument into another function or can be returned from another function.
// they are also called as first class citizens

const functionA = function(a) {
    console.log(a);
}

function abc() {
    console.log("I am the function");
}

functionA(abc);


//other method

functionA ( function ab() {
    console.log("I am ab function");
});


const functionB = function(){
    return function() {
    console.log("I am a returned function");}
}

console.log(functionB());


let returnedValue = function(){
console.log("I am a returned function");}



console.log(returnedValue);


//---------------------------------------------------------------------------------------------------------------------------------

//7

//Closures

// Its not something that we create maunally or explicitly. It happens automatically in certain situations which we need to analysse/realize ourselves.

// It makes a function remember all the variables that existed in the function birth place initially. 

// Any function always have access to the "varibale envoirnment" of the execution context in which the function created.


// If there is higher order function there must be a first class function


const ticketBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`The count of the passenger are ${passengerCount}`);
    }
}

const bookie = ticketBooking();

console.log(bookie); // return function defination line 15 to 18
bookie();  // here bookie is having closure with ticketBooking so this will update the value  // value is 1
bookie(); // value is 2 (updated)


//---------------------------------------------------------------------------------------------------------------------------------


























