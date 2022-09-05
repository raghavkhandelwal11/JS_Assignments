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