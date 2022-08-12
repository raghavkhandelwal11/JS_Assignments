
//1

function uniqueOnly (arr) {
    let a = [], res = [];
    a.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(!(a.includes(arr[i]))) {
            a.push(arr[i]);
        }
    }

    console.log(a);
}
let str = "abcadeecfb";
let Arr1 = str.split("");



// 2

// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function countFrequency(arr) {
    let a = [], res = [];
    // a.push(arr[0]); 
    for(let i = 0; i < arr.length; i++) {
        if(!(a.includes(arr[i]))) {
            // console.log(arr[i]);
            a.push(arr[i]);
            res.push((arr.filter(item => item === arr[i])).length);
            console.log(a[a.length-1] + " = " + res[res.length-1] + " times");
        }
    }
   
}

let Arr2 = str.split("");









 uniqueOnly(Arr1);

console.log("-----------------------------");


countFrequency(Arr2);

