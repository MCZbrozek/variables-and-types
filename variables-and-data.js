/*
 * Variables, Data Types, and Typing
 */

// Creating variables --
let wordData = "Word Data";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;
console.log(totalWithTax)

//How to creat a data object, and nest values with key/value pairs --
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
};
console.log(obj.obj2.obj2Key1);

// Examples of typing systems
// Two primary systems - Dynamic
//Javascript is a weakly typed language

//var1 is a string
let var1 = "2";
//var2 is a number
let var2 = 5;
let result = var1 + var2;

console.log(result);

//operators perform mathematical and concatenation operations on a set of values.
//numerical operations
let add = 1+2;
let sub = 2 -1;
let mult = 2*4;
let division = 4 /2;
let mod = 5 % 2;

//string operations
let string = "String 1 " + "String 2";

console.log(string);

