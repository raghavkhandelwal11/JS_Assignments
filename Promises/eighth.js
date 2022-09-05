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
