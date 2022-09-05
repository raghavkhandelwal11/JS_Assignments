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


