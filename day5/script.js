//1

$('button').click(() => {
    let element0 = document.createElement("h1");
    element0.innerText = 'MERN Stack';
    document.querySelector('.first').appendChild(element0);

})



//--------------------------------------------------------------------------------------------------------------------------

//2

let element1 = document.getElementsByTagName('h1')[0]; // first heading

console.log(element1);



//--------------------------------------------------------------------------------------------------------------------------

//3


setInterval(() => {
    let t = new Date();
    document.getElementById('hrs').innerText = t.getHours();
    document.getElementById('min').innerText = t.getMinutes();
    document.getElementById('sec').innerText = t.getSeconds();
    // console.log(t.getHours);
}, 500)


//--------------------------------------------------------------------------------------------------------------------------

//6

let countZeroes = (ar) => {
    console.log(ar.filter(x => x == 0).length);
}

let arr = new Array(1, 1, 0, 1, 1, 0, 0, 1);
countZeroes(arr);


//--------------------------------------------------------------------------------------------------------------------------

//7

let countEven = (ar) => {
    return ar.filter(x => (x%2 == 0)).length;
}

let arr1 = [2, 3, 1, 0, 8, 4, 7, 2];

console.log("total even numbers in array are " + countEven(arr1));
console.log("total odd numbers in array are " + (arr1.length - countEven(arr1)));


//--------------------------------------------------------------------------------------------------------------------------

//8

let countVowels = (str) => {
    let count = 0;
    let nstr = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count++;
        }
    }
    return count;
}

str = "hey there, how are you!";
console.log(countVowels(str));


//--------------------------------------------------------------------------------------------------------------------------

//9

let obj1 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array']
}

let obj2 = {
    a: "this is a string",
    b: ['this', 'is', 'an', 'array2']
}

function sameArray(o1, o2) {
    let arr1 = o1.b;
    let arr2 = o2.b;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false


//--------------------------------------------------------------------------------------------------------------------------






