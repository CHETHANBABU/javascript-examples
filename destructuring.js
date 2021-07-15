/**
 * Destrcturing - Easily extract array elements OR object propertirs and store them in variables.
 */
// -------- Array Destructutirin ------------
const numbers = [1, 2, 3];
[a, b] = numbers;
console.log('a', a, 'b', b);
[m, , o] = numbers;
console.log('m', m, 'o', o);
