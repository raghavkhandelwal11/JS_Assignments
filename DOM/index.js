//1
console.log(document.getElementById("text"));

//2
console.log(document.getElementsByName("h1"));

//3
console.log(document.getElementsByClassName("box")[0]);

//4
let element1 = document.getElementsByClassName('change')[0];
element1.innerText = "Hello World";

//5
function changeDirection() {
    const element1 = document.getElementsByClassName("flex_container");

    element1[0].style.flexFlow = "column wrap";
}

//6
let newElement = document.getElementsByClassName("heading1");

newElement[0].style.color = "red";
newElement[0].setAttribute("id", "heading");
console.log(newElement[0]);


//8
function clock1() {
    let currTime = new Date();
    let hrs = ("0" + currTime.getHours()).slice(-2);
    let mins = ("0" + currTime.getMinutes()).slice(-2);
    let secs = ("0" + currTime.getSeconds()).slice(-2);
    document.getElementById("clock").innerText = hrs + " : " + mins + " : " + secs;

    let x = setInterval(clock1, 500);    
}

//9

function func1() {
    let d  = document.getElementById("year1");
    let dtext = d.options[d.selectedIndex].text;
    document.getElementById("print").innerText = dtext;
}

const input = document.getElementById('email');
const defaultEmail = '@prepbytes.com';
input.value = defaultEmail;





