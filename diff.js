// ---------------- var example -----------------------
var myName = "Max";
console.log(myName);

myName = 'Manu';
console.log(myName);

// ------------------ let example ----------------------
let myName1 = 'Max';
console.log(myName1);

myName1 = 'Manu';
console.log(myName1);

// ------------------- const example -------------------
const myName2 = 'Max';
console.log(myName2);

myName2 = 'Manu'
console.log(myname2);

// --------------------------------------------------------
for (let i = 0; i < 10; i++) {
    console.log("let i", i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log("test 1", i); //throws an error as "i is not defined" because i is not visible

for (var i = 0; i < 10; i++) {
    console.log("var i", i); //i is visible thus is logged in the console as 0,1,2,....,9
}
console.log("test 2", i); //i is visible here too. thus is logged as 10.
// ----------------------------------------------------------------------------------------
var temp = "this is a temp variable";
var temp = "this is a second temp variable"; //replaced easily
console.log("temp", temp);
// ----------------------------------------------------------------------------------------
let temp = "this is a temp variable";
let temp = "this is a second temp variable" //SyntaxError: temp is already declared