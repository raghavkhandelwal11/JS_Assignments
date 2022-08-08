//1

const func1 = () => {
    console.log("Hello!!")
}
func1();


//2

const func2 = (a, b) => {
    let sum = a+b;
    console.log("Sum of " + a + " " + b + " is " + sum);
}
func2();

//3

const func3 = () => {
    console.log("This is an arrow function")
}
func3();

//4

console.log("undefined");

// 5

console.log("21");


// 6
console.log("a is not defined, referrance error");

//7

const func4 = (n) => {
    if(n === 1) {
        return 1;
    }

    return n*func4(n-1);
}
console.log(func4(4));


// 

// var x = 21;
// girl();
// console.log(x);
// function girl() {
//     console.log(x);
//     var x = 20;
// };






