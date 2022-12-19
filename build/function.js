"use strict";
// tipe data return function
function getName() {
    return "My Name";
}
// console.log(getName())
function getAge() {
    return 21;
}
// Void tidak bisa mereturnkan data
function printName() {
    console.log(getName());
    console.log("Udin");
}
printName();
// Argument Type
function multiplay(val1, val2) {
    return val1 * val2;
}
const result = multiplay(2, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
const resultAdd = Add(50, 5);
console.log(resultAdd);
// default parameters
const fullName = (firtst, last = "Afrizal") => {
    return firtst + " " + last;
};
console.log(fullName("Bagas", "Afrizal"));
// Optional Params
// let getUmur = (val1: number, val2?: number): number => {
//     return val1 + val2;
// }
// console.log(getUmur(10, 10));
