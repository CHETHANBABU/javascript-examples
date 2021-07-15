/**
 * -----------------------------------------------------------------------------------------------------
 * A pure function is a function which:
 * 1. Given the same input, will always return the same output
 * 2. Produces no side effects
 * ------------------------------------------------------------------------------------------------------
 * What Is A Pure Function?
 * 1. The function always returns the same result if the same arguments are passed in.
 *      It does not depend on any state, or data, change during a program’s execution.
 *      It must only depend on its input arguments.
 * 2. The function does not produce any observable side effects such as network requests,
 *      input and output devices, or data mutation.
 * ------------------------------------------------------------------------------------------------------
 * Pure functions take some input and return some output based on that input.
 * They are the simplest reusable building blocks of code in a program.
 * Perhaps the most important design principle in computer science is KISS (Keep It Simple, Stupid).
 * I prefer Keep It Stupid Simple. Pure functions are stupid simple in the best possible way.
 * ------------------------------------------------------------------------------------------------------
 * non-determinism = parallel processing + mutable state
 * A pure function produces no side effects, which means that it can’t alter any external state.
 * ------------------------------------------------------------------------------------------------------
 * What Are Observable Side Effects?
 *  An observable side effect is any interaction with the outside world from within a function.
 *  That could be anything from changing a variable that exists outside the function,
 *  to calling another method from within a function.
 * 
 * Side effects include, but are not limited to:
 * Making a HTTP request, Mutating data, Printing to a screen or console, DOM Query/Manipulation,
 * Math.random(), Getting the current time
 * ------------------------------------------------------------------------------------------------------
 * One of the major benefits of using pure functions is they are immediately testable.
 * They will always produce the same result if you pass in the same arguments.
 */

 // Pure function example
function priceAfterTax(productPrice) {
    return (productPrice * 0.20) + productPrice;
}

console.log('pureFunction', priceAfterTax(1));

// Impure function example
var tax = 10;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice; 
}
console.log('impureFunction', calculateTax(1));


