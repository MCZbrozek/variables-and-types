/*
 * Conditionals, Funcitons, Scope and Loops.
 */

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5>1;

// Less than
let lessThan = 2 < 10;

// Greater than or equal to
let greaterThanEq = 5 >= 5;

// Less than or equal to
let lessThanEq = 4 <= 9;

// Not equal
let notEquals = 5!== 2;

// ----
let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
// Create a function to compare store prices.
function compareStorePrices (storeA, storeB) {
    //control statement
    if (storeAIsLower) {
        console.log("Store A has a lower price. ")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price. ")
    } else {
        console.log("Their prices are equal. ")
    }
}

compareStorePrices(10, 5);
compareStorePrices(8 , 17);

//
// Creat a function that squares a number.
    function squareNum (number) {
        return number * number
    }
let squaredNumber = squareNum(4);
console.log(squaredNumber)

// Scope ---
// Global scope, variable is defined outside the function.
let x =10;
// Function scope, variable x may have its own definition inside the function
function addNumbers (n, m, x) {
    console.log(x)
    return n + m
}

addNumbers(2 , 3);
console.log(addNumbers(2, 3));

// Block scope

let y = 10;

function addNumbers (n, m, y) {
    console.log(y)
    let b;
    if (1===1) {
        let b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1 , 2, 10);
console.log(addNumbers(2, 3, 8));

// Arrays --- indexed from zero, just like Python.
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c'], 6, 7];
// Access values by:
console.log(ourArray[4][0]);

//
// for(counter; comparison; incrementer)
let arrLen = ourArray.length
for(let i = 0; i<arrLen; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}

// While loops
let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}