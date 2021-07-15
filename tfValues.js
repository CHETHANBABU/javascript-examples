/****************
 * truthy values: not flasy values
 * falsy values: undefined, null, '', 0, NaN
 */
// let h = 3;
// let h = 0;
let h = 23;
if (h || h === 0) {
    console.log('h is defined');
} else {
    console.log('h is not defined');
}

// Equality operators
if (h == '23') {
    console.log('h == is equality oper');
}