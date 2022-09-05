//4


let bin = (str) => {
    return new Promise((resolve, reject) => {
        if(str === "yes") {
            resolve();
        }
        else {
            reject();
        }
    })
}

str = "yes";
bin(str).then(() => {
    console.log("promise resolved");
}).catch(() => {
    console.log("promise rejected");
})

//output 

// promise resolved

