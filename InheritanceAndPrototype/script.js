const parent = {
    printName: function() {
        console.log("hey there! this is parent.");
    }
}

let child = {
    name1: "child1",
    id: "#1432",
    printDetails: function() {
        console.log(`name1 is ${this.name1} and id is ${this.id}`);
    }
}

child.__proto__ = parent;
child.printName();


//-----------------------------------------------------------------

console.log(child.__proto__.__proto__);

// output: 
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

//here we are getting of function constructor by using prototype chaining
// child is a user defined object, and prototype of that child prototype is function constuctor


//-----------------------------------------------------------------------


const arraySum = {
    addAll: function (arr) {
        let sum  = 0;
        for(let i = 0; i < arr.length; i++) {
            sum+= arr[i];
        }
        console.log(sum);
    }
}

Array.__proto__ = arraySum;

arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = [123, 456, 789];
arr3 = [34, 44, -64, 23, 53, -8];

Array.addAll(arr1);
Array.addAll(arr2);
Array.addAll(arr3);

//-----------------------------------------------------------------------------


var keys = [];
for (var key in child) keys.push(key);
console.log(keys);

//output: ['name1', 'id', 'printDetails', 'printName']


//---------------------------------------------------------------------------