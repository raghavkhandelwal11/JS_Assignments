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