
//1

// A callback function is simply a function which is passed as an arguement to another function


//exmple

function func1(a) {
    console.log(a);
}

function caller(x, y, cb) {
    let res = x + y;
    cb(res);
}

// calling
caller(23, 54, func1);

// output 77


//-----------------------------------------------------------------------------

//2


function number(n) {
    let num = n;
    setTimeout((func) => {
        console.log(++num);
        if(num >= 7) {
            return;
        }
        number(num);
    }, num*1000, number);
};
number(0);

//±±callback hell
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


//------------------------------------------------------------------------------------

//3


let printNumbers = function(n) {
    return new Promise((resolve, reject) => {
        if(n <= 7){
            resolve(n++);
        setTimeout((num) => {
            printNumbers(num).then((q) => console.log(q));
        },n*1000, n);
        }
    })
}

// printNumbers(1).then((n) => console.log(n)); 



//-------------------------------------------------------------------------------------

//4


let bin = (str) => {
    return new Promise((resolve, reject) => {
        if(str === "yes") {
            resolve();
        }
        else {
            reject();
        }
    })
}

str = "yes";
bin(str).then(() => {
    console.log("promise resolved");
}).catch(() => {
    console.log("promise rejected");
})

//output 

// promise resolved


//---------------------------------------------------------------------------------

//5



// callback functions can be called in asynchronous way using javascript let consider this example

function func2(a) {
    console.log(a);
}

function caller1(x, y, cb) {
    let res = x + y;
    cb(res);
}

// calling
caller1(23, 54, func2);

//output 77

// here we can that func2 is a call back function and it is being called using another caller function by passsing it as an arguement


//-------------------------------------------------------------------------------------------------

//6

//CALLBACK HELL

//callbacks are just the name/convention for using javascript. It instead of imidiately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback hell.

// the structure of callback hell looks like pyramid/arraw shape.
// This makes our code look haphazard and makes it hard to understand
// We should always try to avoid using multiple callbacks to end up falling into callback hell

// lets consider the folowing example:

const getEmpId = () => {
    setTimeout(() => {
        console.log("fetching the ID's");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName: 'raghav',
                lName: 'khandelwal',
                age: 23
            };
            console.log(`the name if the employ is ${empDetails.fName} ${empDetails.lName}`);

            setTimeout(() => {
                (empDetails.gender = 'male'),
                console.log(`the name of Employee is ${empDetails.fName} ${empDetails.lName}`);

            }, 2000);
        }, 2000);
    }, 2000);
};

getEmpId();

// output: 

// fetching the ID's
// [1, 2, 3, 4, 5]
// he name if the employee is raghav khandelwal
// the name of Employee is raghav khandelwal


// Here getEmpId function has three setTimeout function which are linearly dependent on eath other 

// if some error occur in one of them the next function won't be valid input for their execution and hence the whole code execution will be stopped


//---------------------------------------------------------------------------------------------

//7


//PROMISES

// promises are used to handle asynchronous operations in JS. they are easy to manage 

// promisees are used to API calls

// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. it also allows us to make API calls or fetch data from web servers successfully. If not able to do so fetches us with an error.

//It has three stages
// 1. pending
// 2. Resolved(fulfilled)
// 3. Rejected


const getId = new Promise((resolve, reject) => { // producer//resolve and reject are exector functions
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        reject("Error in fetching the data");
    }, 2000)

});


getId                       // consumer
    .then((data) => { // here data is what resolve takes as argument
        console.log("the data resolved is", data);  // resolve always work for .then method
    })
    .catch((error) => {
        console.log(error);  // reject always works for .catch method
    })
    .finally(() => { // finally method is optional to use
        console.log("End of promise");
    });




    // output


    // the data resolved is (5) [1, 2, 3, 4, 5]


//----------------------------------------------------------------------------------------------------

//8

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


// In above example we can see the working of async and await. the three function are called inside the callAllFunction and  functionThree won't be called before functionTwo becuase we are using await with functionTwo

//--------------------------------------------------------------------------------------------------------------

//9

//The Promise.all() method takes multiple promises as an input, and returns a single Promise that resolves to an array of the results of the input promises



const f1 = new Promise((resolve, reject) => resolve("this is function one"));

const f2 = new Promise((resolve, reject) => resolve("this is function two"));

const f3 = new Promise((resolve, reject) => resolve("this is function three"));


Promise.all([ f1, f2, f3]).then((message) => console.log(message));



// output is array of three strings 

// 0: "this is function one"
// 1: "this is function two"
// 2: "this is function three"



//-------------------------------------------------------------------------------------------








// extra









// let printNumber = ( time, num ) => {
//     return new Promise( ( resolve, reject )=>{
//     if( num ){
//     setTimeout(()=>{
//     resolve( num() )
//     }, time)
//     }
//     else{
//     reject( console.log("No number") )
//     }
//     })
//     }
//     printNumber( 0, ()=>console.log("Numbers"))//prints Numbers at 0th
//     sec
//     .then(()=>{
//     return printNumber(1000,()=>console.log('1'))//prints 1
    
//     //after 1 secs
//     })
//     .then(()=>{
//     return printNumber(2000,()=>console.log('2'))//prints 2
    
//     //after 2 secs and so for others
//     })
//     .then(()=>{
//     return printNumber(3000,()=>console.log('3'))
//     })
//     .then(()=>{
//     return printNumber(4000,()=>console.log('4'))
//     })
//     .then(()=>{
//     return printNumber(5000,()=>console.log('5'))
//     })
    
//     .then(()=>{
//     return printNumber(6000,()=>console.log('6'))
//     })
//     .then(()=>{
//     return printNumber(7000,()=>console.log('7'))
//     })