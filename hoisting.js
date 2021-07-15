/**********************************
 * Hoisting with funtions
 */
function calculateAge(year) {
    console.log('line 5', 2019 - year);
}
calculateAge(1993);
//-----------------------------
calculateAge1(1993);
function calculateAge1(year) {
    console.log('line 11', 2019 - year);
}
//------------------------------
var retirement = function(year) {
    console.log('variable expression', 65 - (2019 - year));
}
retirement(1993);

/***********************************************
 * the below code will thrown an error,
 * Uncaught Error, retirement1 is not a function
 */
// retirement1(1999);
// var retirement1 = function(year) {
//     console.log(65 - (2019 - year));
// }

/********************************************
 *  Hoisting with variables
 */
console.log('line 31', age);
var age = 23;
console.log('line 33', age);

//-------------below code thrown an error of bar is not a defined
// console.log(bar);

function foo() {
    var age = 65;
    console.log('line 40', age);
}
foo();
console.log('line 43', age);

var a = 2;
foo1();					// works because `foo()`
						// declaration is "hoisted"
function foo1() {
	a = 3;
	console.log( a );	// 3
	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}
console.log( a );	// 2