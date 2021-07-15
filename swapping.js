/**
 * swaping of 2 numbers without 3rd var
 */
let a = 1,
    b = 2;

// ------- way 1 --------
a = a + b
b = a - b
a = a - b
console.log('A', a, 'B', b);

// ------- way 2 --------
a += b
b  = a - b
a -= b
console.log('A', a, 'B', b);

// ------- way 3 --------
a = a ^ b
b = a ^ b
a = a ^ b
console.log('A', a, 'B', b);

// ------- way 4 --------
a ^= b;
b ^= a;
a ^= b;
console.log('A', a, 'B', b);

/**
 * Single line swapping with addition 1
 */
a = b + (b=a, 0);
console.log('A', a, 'B', b);

/**
 * Single line swapping with addition 2
 */
b=a+(a=b)-b;
console.log('A', a, 'B', b);

/**
 * Single line swapping with XOR
 */
a = a^b^(b^=(a^b));
console.log('A', a, 'B', b);

/**
 * Classic one-line method
 */
a = [b, b=a][0];
console.log('A', a, 'B', b);

/**
 * Using ES6 self executing arrow functions
 */
b = (a=>a)(a,a=b);
console.log('A', a, 'B', b);

/**
 * ES5+ immediately invoked function
 */
b = (function(a){ return a })(a, a=b);
console.log('A', a, 'B', b);

/**
 * ES6+ method
 */
[a, b] = [b, a];
console.log('A', a, 'B', b);