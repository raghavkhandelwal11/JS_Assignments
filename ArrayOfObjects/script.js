let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ];

//------------------------------------

let nameArray = [];

for(let i = 0; i < studentRecords.length; i++) {
    nameArray.push(studentRecords[i].name);
}

//--------------------------

console.log(nameArray);


//-----------------------------------


console.log(studentRecords.filter(x => x.marks > 50));


//--------------------------------

console.log(studentRecords.filter(x => x.marks > 50).filter(y => y.id > 120));


//----------------------------

console.log(studentRecords.reduce((acc, curr) => {return acc + curr.marks;}, 0));


//-------------------------------------

const cutOff = studentRecords.filter(x => x.marks > 50);

for(let i = 0; i < cutOff.length; i++) {
    console.log(cutOff[i].name);
}

//------------------------------------------

console.log(studentRecords.filter(x => x.id > 120).reduce((acc, curr) => {return acc + curr.marks;}, 0));

//----------------------------------------

studentRecords.every(grace);

function grace(x) {
    if(parseInt(x.marks) < 50) {
        x.marks = parseInt(x.marks)+15;
    }
    return x;
}

console.log(studentRecords);




//----------------------------------------




 function Student (fName, class1, rollno) {
    this.fName = fName;
    this.class1 = class1;
    this.rollno = rollno;
}

const stuArr = [new Student("John", "fifth", 24), new Student("Baba", "fifth", 34), new Student("Yaga", "seventh", 21), new Student("Wick", "third", 37), new Student("raghav", "first", 30), new Student("lucky", "eleventh", 9)];


console.log(stuArr);
