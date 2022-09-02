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


//-----------------------------------------------------------------------------


// function number(n) {
//     let num = n;
//     setTimeout((func) => {
//         console.log(++num);
//         if(num >= 7) {
//             return;
//         }
//         number(num);
//     }, 1000, number);
// };
// number(0);

//±±callback hell
//callbacks are just the name/convention for using javascript. It instead of imidiately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback hell.

// the structure of callback hell looks like pyramid/arraw shape.
// This makes our code look haphazard and makes it hard to understand
// We should always try to avoid using multiple callbacks to end up falling into callback hell


//------------------------------------------------------------------------------------

// function number1(n) {
//     let num = n;
//     setTimeout((func) => {
//         console.log(++num);
//         if(num >= 7) {
//             return;
//         }
//         number1(num);
//     }, num*1000, number);
// };

// let func2 = async (n) => {
//     await number1(n);
// }
// func2(0);


//-------------------------------------------------------------------------------------


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


//---------------------------------------------------------------------------------



// callback functions can called in asynchronous way using javascript let consider this example

function func2(a) {
    console.log(a);
}

function caller1(x, y, cb) {
    let res = x + y;
    cb(res);
}

// calling
caller1(23, 54, func2);

// here we can that func2 is a call back function and it is being called using another caller function by passsing it as an arguement


//-------------------------------------------------------------------------------------------------

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
                fName: 'harsh',
                lName: 'Bajaj',
                age: 28
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

// Here getEmpId function has three setTimeout function which are linearly dependent on eath other 

// if some error occur in one of them the next function won't be valid input for their execution and hence the whole code execution will be stopped


//---------------------------------------------------------------------------------------------


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


//----------------------------------------------------------------------------------------------------

//ASYNC AND AWAIT

//Async/Await => they always used to handle promises more efficiently. The world async before a function always means that function always returns a PROMISE. so we therefore use async 


// Async and Awake are alwways used together

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


// In above example we can see the working of async and await. the three function are called inside the callAllFunction and  functionThree won't be called before functionTwo becuase we are using await with functionTwo

//--------------------------------------------------------------------------------------------------------------


//The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises




const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});

//-----------------------------------------------------------------------------------------------------------------------------