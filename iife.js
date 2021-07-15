/***********************
 * IIFE (Immedietly Invoked Function Expressions)
 */
(function () {
    console.log(Math.random() * 10);
})();
// -----------------------------------------------
var a = 42;
(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();
console.log( a );		// 42
// -----------------------------------------------
var x = (function IIFE(){
	return 42;
})();
x;	// 42