/*
 * Objects, Interfaces, and API's
 */

let dog = {
    name: "Steve",
    color: "brown",
    breed: "Pug",
    size: "Small",
    bark: function(typeOfBark) {
        console.log("Bark!");
    },
};

//Passing by value or by reference.
function x(y) {
    y.num= y.num + 5;
    console.log(y);
}
let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);