
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