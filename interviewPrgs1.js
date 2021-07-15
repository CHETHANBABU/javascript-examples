/**
 * recursive fibonacci number
 * @param {*} n 
 */
function fib(n) {
    if (n === 1)
        return 0;
    if (n === 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log('recursive fibonacci number', fib(4));
/**
 * 
 * @param {*} num 
 */
function fibonacci(num) {
    var num1 = 0, num2 = 1, sum, i = 2;
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;    
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}
console.log('fibonacci', fibonacci(4));

/**
 * fibo using for
 * @param {*} n 
 */
function fiboFor(num) {
    var num1=0; 
    var num2=1; 
    var sum; 
    for (var i = 2; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
}
console.log('fiboFor', fiboFor(4));

function fibo(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr;
}
console.log('fibo arr', fibo(4));

/**
 * ES6
 * @param {*} n 
 */
const fibonaccih = n =>
    Array.from({ length: n }).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
console.log(fibonaccih(2));
console.log(fibonaccih(3));
console.log(fibonaccih(6));