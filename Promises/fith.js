//5



// callback functions can be called in asynchronous way using javascript let consider this example

function func2(a) {
    console.log(a);
}

function caller1(x, y, cb) {
    let res = x + y;
    cb(res);
}

// calling
caller1(23, 54, func2);

//output 77

// here we can that func2 is a call back function and it is being called using another caller function by passsing it as an arguement
