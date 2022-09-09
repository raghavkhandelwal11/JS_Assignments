//1 

//PROMISES

// promises are used to handle asynchronous operations in JS. they are easy to manage 

// promisees are used to API calls

// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. it also allows us to make API calls or fetch data from web servers successfully. If not able to do so fetches us with an error.

//It has three stages
// 1. pending
// 2. Resolved(fulfilled)
// 3. Rejected

// const getId = new Promise((resolve, reject) => { // producer//resolve and reject are exector functions
//     setTimeout(() => {
//         let id = [1, 2, 3, 4, 5];
//         resolve(id);
//         reject("Error in fetching the data");
//     }, 2000)

// });

// getId                       //consumer
//     .then((data) => { // here data is what resolve takes as argument
//         console.log("the data resolved is", data);  // resolve always work for .then method
//     })
//     .catch((error) => {
//         console.log(error);  // reject always works for .catch method
//     })
//     .finally(() => { // finally method is optional to use
//         console.log("End of promise");
//     });


    
//----------------------------------------------------------------------------------------------------

//2

//ASYNC AND AWAIT

//Async/Await => they always used to handle promises more efficiently. The world async before a function always means that function always returns a PROMISE. so we therefore use async 


// Async and Awake are alwways used together

//Await is used 

//--> Async/Await - They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.


// let p = function(x) {
//   return new Promise((resolve, reject) => {
//     if(x >= 50) {
//         resolve("number is big enough!"); 
//     } else {
//         reject("try again with a greater number");
//     }

// })
// };


// async function q(y) {
//     let r = await p(y);
//     console.log(r);
// }

// q(56);


//----------------------------------------------------------------------------------------------------


//3

// hoisting is a default feature in JS than automatically pushes the function deleclaration at top


trex(); // "hello shinLord"
console.log(t); //undefined

var t=21;

function trex() {
    console.log("Hello shinLord");
}


trex(); //"hello shinLord"


//-------------------------------------------------------------------------------------------------

//4

//DOM

// DOM manipulation is the interaction of the JavaScript DOM API to modify or change the HTML document.

// we can perform CRUD operations in html elements on HTML document elemens using JS

// create 

let element1 = document.createElement('div');
element1.setAttribute('class', 'new');
element1.innerText = 'Hello!';

// select 

let element2 = document.querySelector('.addHere');

//update

element2.appendChild(element1);

//remove

document.querySelector('#three').remove();



//-------------------------------------------------------------------------------------------------


//5 


// difference between undefined and not-defined and null

//undefined: when we try to access a variable that is defiend but not initialized for var keyword
// null: its a value that we initilaize to a variable which will later be replaced with some other value (used with let and var only)

// not defined: when we try to access a variable which is not defined

// not-defined: when we try to access a vraible that is not defined
console.log(myCountry); // undefined
let myCountry = null;
console.log(myCountry); // null
myCountry = "India"; 
console.log(myCountry); // India
console.log(hello); // not-defined


// NaN appears when we are expectinga a number but instead any alphaNumeral string or an alphabet appears. NaN => not a number 


//-------------------------------------------------------------------------------------------------

//6

// Arithmatic OPERATORS

// + --> addition
// - --> subtraction
// * --> multiplication
// %  
// / 
// ** 
// ++  (with post increament and pre-increament)
// -- (with post increament and pre-increament)




//Assignment operators 

// = += -= *= /=





//ternary operator


console.log((1 > 2) ? "Hi" : "Bye");




// comparison operators

// == === < > <= >= ? != !==




//Logical operators

// && || !



//Bitwise Operator

// & | ~ ^ << >> >>>


//-------------------------------------------------------------------------------------------------

//7

//callback hell
//callbacks are just the name/convention for using javascript. It instead of imidiately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback hell.

// the structure of callback hell looks like pyramid/arraw shape.
// This makes our code look haphazard and makes it hard to understand
// We should always try to avoid using multiple callbacks to end up falling into callback hell



let production = () =>{
    console.log("Numbers")
    setTimeout(()=>{
    console.log("1")//prints after 1 sec
    setTimeout(()=>{
    console.log("2")//prints after 2 secs
    setTimeout(()=>{
    console.log("3")//prints after 3 secs
    setTimeout(()=>{
    console.log("4")//prints after 4 secs
    setTimeout(()=>{
    console.log("5")//prints after 5 secs
    setTimeout(()=>{
    console.log("6")//prints after 6 secs
    setTimeout(()=>{
    console.log("7")//prints after 7 secs
    },7000)//sets timeout interval as 7 secs
    },6000)//sets timeout interval as 6 secs
    },5000)//sets timeout interval as 5 secs
    },4000)//sets timeout interval as 4 secs
    },3000)//sets timeout interval as 3 secs
    },2000)//sets timeout interval as 2 secs
    },1000)//sets timeout interval as 1 sec
    };
    
    production()

// In the above code if the asynchrouus task error occurs somwhere inside the production function the the code execution will be halted and this is genrally not desired


//-------------------------------------------------------------------------------------------------

//8

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });
  

//   The idea is that the result is passed through the chain of .then handlers.

// Here the flow is:

// The initial promise resolves in 1 second (*),
// Then the .then handler is called (**), which in turn creates a new promise (resolved with 2 value).
// The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
// …and so on.
// As the result is passed along the chain of handlers, we can see a sequence of console.log() calls: 1 → 2 → 4.



//-------------------------------------------------------------------------------------------------

//9

// arrow functions are one of ways to define the function in javaScript


//syntax example

let exp = () => {
    console.log('this is example of an arrow function');
};

exp(); // this is example of an arrow function



// Arrow functions allow us to write shorter function syntax

// unlike normal fucntions, Arrow functions does not support hoisting

// Arrow function cannot bind with the "this" keyword, With arrow functions the this keyword always represents the object that defined the arrow function.


//-------------------------------------------------------------------------------------------------

//10


//ASYNC AND AWAIT

//Async/Await => they always used to handle promises more efficiently. The world async before a function always means that function always returns a PROMISE. so we therefore use async 


// Async and Awake are always used together

//--> Async/Await - They are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.



const functionOne = () => {
    return 'I am function one';
};

const functionTwo = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("I am function two"); 
         }, 3000)
    })
}

const functionThree = () => {
    return "I am function three";
};


const callAllFunctions = async () => {
    let responseOne = functionOne();
    console.log(responseOne);


    let responseTwo = await functionTwo();
    console.log(responseTwo);


    let responseThree = functionThree();
    console.log(responseThree);
};

callAllFunctions();


// output

// I am function one
// I am function two
// I am function three









