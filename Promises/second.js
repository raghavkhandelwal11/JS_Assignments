function number(n) {
    let num = n;
    setTimeout((func) => {
        console.log(++num);
        if(num >= 7) {
            return;
        }
        number(num);
    }, num*1000, number);
};
number(0);


//±±callback hell
//callbacks are just the name/convention for using javascript. It instead of imidiately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback hell.

// the structure of callback hell looks like pyramid/arraw shape.
// This makes our code look haphazard and makes it hard to understand
// We should always try to avoid using multiple callbacks to end up falling into callback hell



let production = () =>{
    console.log("Numbers")
    setTimeout(()=>{
    console.log("1")//prints after 1 sec
    setTimeout(()=>{
    console.log("2")//prints after 2 secs
    setTimeout(()=>{
    console.log("3")//prints after 3 secs
    setTimeout(()=>{
    console.log("4")//prints after 4 secs
    setTimeout(()=>{
    console.log("5")//prints after 5 secs
    setTimeout(()=>{
    console.log("6")//prints after 6 secs
    setTimeout(()=>{
    console.log("7")//prints after 7 secs
    },7000)//sets timeout interval as 7 secs
    },6000)//sets timeout interval as 6 secs
    },5000)//sets timeout interval as 5 secs
    },4000)//sets timeout interval as 4 secs
    },3000)//sets timeout interval as 3 secs
    },2000)//sets timeout interval as 2 secs
    },1000)//sets timeout interval as 1 sec
    };
    
    production()