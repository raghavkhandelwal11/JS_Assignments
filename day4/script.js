//1
// Temporal Dead Zone

//A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// {
//     console.log("This will give us reference error due to temporal dead zone" + value);


//     let value = 0;
// }


//-------------------------------------------------------------------------------------------

//2

//for in loop

// for in loop is efficient way to iterate over the keys or elements(in case of arrays) in an easier syntax with lesser lines of code



// let's consider an example 

let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

for(const x in arr) {
    console.log("element is: " +  x);
}



//--------------------------------------------------------------------------------------------

//Local/Functional Scope

// This type of scope is defined when we declare a function or method and all the variables or nested function inside them inside them are called the local variables. Basically scope sets a boundary for the local variables such that, they are not accessible outside of the local scope.
//

function func() {
    let a = 2; 
    const b = 2;
    console.log(a + b);
}
func();
// console.log(a); // generates refrence error



//block scope

// block scope is only related to the let an const variablesa and function because var type is not black scoped.

// If we define let and const type varible inside the block scope that means we can only access those variables within that scope only and not outside of it.


// {
//     var p = 2;
//     let q = 3;
//     const r = 4;

// }
// console.log(p); // able to access
// console.log(q); // not able to access
// console.log(r); // not able to access


// scope chaining

//JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.

//Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).

//This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.


//example

// Global variable
var global_variable = 20;
  
function main_function() {
    // Local Variable
    var local_variable = 30;

    var nested_function = function () {

        // Display the value inside the local variable
        console.log(local_variable);
    }

    var another_nested_function = function () {
          
        // Displays the value inside the global variable
        console.log(global_variable);
    }

    nested_function();
    another_nested_function();
}

main_function();


//--------------------------------------------------------------------------------------------

//4

//undefined: when we try to access a variable that is defiend but not initialized for var keyword

// null: its a value that we initilaize to a variable which will later be replaced with some other value (used with let and var only)


// In case we do not know the data type and value to inititiate the variable its better to go with null and in the where the space is allocated to a variable but the value is not defined than we use undefined to begin with.



//--------------------------------------------------------------------------------------------

//5

//Symbols

//Symbols are new primitive type. Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol.


let symb = Symbol("test");

console.log(symb);

//Every symbol returned by Symbol() is unique, so every symbol has its own identity.

//--------------------------------------------------------------------------------------------

//6


const listOfNumber = [2, 3, 5, 6, 4, 1, 8, 4];

//MAP

const mappedNumbers = listOfNumber.map(item => item*2);

console.log(mappedNumbers);
console.log(listOfNumber);

// FILTER

const filterNumbers = listOfNumber.filter(item => item > 2);
console.log(filterNumbers); //[3, 5, 6, 4, 8, 4]



//--------------------------------------------------------------------------------------------

//7

//Pass by value

function func2(a) {
    console.log(a);
}

let d = 23;
func2(d);  // this is pass by value 

//In pass by value we invoke a function by passing a value as am arguement, like we are doing in the above example. Here value of d = 23 so we are passing it like func2(23)


//Pass by refernce 

function func3(obj) {
    obj.a = 1;
    obj.b = 2;

    console.log(obj.a + obj.b);
}

let obj = {
    a: 23,
    b: 32
}

func3(obj); // 3  // pass by reference

//In JS we can call a function by using a array or an object as an arguemnt.
//One important feature of this is we can change the orginal object from inside the function. which is not possible in pass by value because we can only access the variable with in scope in pass by value.

//--------------------------------------------------------------------------------------------


//8

//Self invoking function

//A self-invoking expression is invoked (started) automatically, without being called.

// basically these function gets invoked right after their defination.

//example

(function () {
    console.log("this is self invoking function");
}) ();

//this is self invoking function


//--------------------------------------------------------------------------------------------


//9



//Call Stack

//The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now. The below example demonstrates the call stack.



//Event loop

// call back functions will go to web APIs to wait for event to happen (till the timer expires)

// when a call stack goes empty after execution the Event Loop comes in action to allot other task (callback function in our case) which are waiting to be executed in call stack. it goes and checks the waiting to check if there is something in waiting queue waiting to be executed


//after the waiting period is over the callbacks will be moved to waiting queue (fifo)

// here is discussed asynchronous JS (here wait is asynchronous)

          

//--------------------------------------------------------------------------------------------





