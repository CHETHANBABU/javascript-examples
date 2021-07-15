/******
 * Functions
 */
function calcAge(bYear) {
    return 2019 - bYear;
}

let age = calcAge(1993);
console.log('age', age);
// -------------------------------
const printName = (name) => {
    console.log(name);
}
printName('chethan');
// -------------------------------
const multiply = (num) => num * 2;
console.log(multiply(4));
// -------------------------------
const moreArg = (...args) => {
    console.log(args);
}
moreArg(1, 2, 3);


