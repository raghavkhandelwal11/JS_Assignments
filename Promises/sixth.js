//6

//CALLBACK HELL

//callbacks are just the name/convention for using javascript. It instead of imidiately returning results like other functions, takes time to produce the result. So, If we stuck in some particular call which prevents us from making further calls ends us into callback hell.

// the structure of callback hell looks like pyramid/arraw shape.
// This makes our code look haphazard and makes it hard to understand
// We should always try to avoid using multiple callbacks to end up falling into callback hell

// lets consider the folowing example:

const getEmpId = () => {
    setTimeout(() => {
        console.log("fetching the ID's");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName: 'raghav',
                lName: 'khandelwal',
                age: 23
            };
            console.log(`the name if the employ is ${empDetails.fName} ${empDetails.lName}`);

            setTimeout(() => {
                (empDetails.gender = 'male'),
                console.log(`the name of Employee is ${empDetails.fName} ${empDetails.lName}`);

            }, 2000);
        }, 2000);
    }, 2000);
};

getEmpId();

// output: 

// fetching the ID's
// [1, 2, 3, 4, 5]
// he name if the employee is raghav khandelwal
// the name of Employee is raghav khandelwal


// Here getEmpId function has three setTimeout function which are linearly dependent on eath other 

// if some error occur in one of them the next function won't be valid input for their execution and hence the whole code execution will be stopped

