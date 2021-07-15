/** async function */

function someMath() {
    console.log('someMath');
    for (let i = 0; i < 3000000; i++) { Math.sqrt(i ** 5) }
}

function timeout(n) {
    console.log('timeout');
    return new Promise(cb => setTimeout(cb, n))
}

// ------------------------------------------------- a (no await)
async function a() {
    someMath()
    console.log('in a (no await)')
}

// ---------------------------------------------------- b (await)
async function b() {
    await timeout(100)
    console.log('in b (await)')
}

b();
a();

/** Sum of digits recursive */
function sumDigits(num) {
    return num ? (num % 10) + sumDigits(Math.floor(num / 10)) : 0
}

console.log('sumDigits === ', sumDigits(1234));

function sumDigit(stringOfNums) {
    // Split the string into an array of strings. Reduce the array to the sum by 
    // converting each string to a number.
    console.log('sumDigits ==== ', stringOfNums.split('').reduce(function (x, y) { return +x + +y }, 0));
}
sumDigit("1234");

/** number of digits */
const digitCount2 = num => String(Math.floor(Math.abs(num))).length;
console.log('No. of digits', digitCount2(3343));
/**
 * 
 * @param {12321 after rotation 12321 number is still same} number 
 */
function palindrome(number) {
    var rem, temp, final = 0;
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (temp === final) {
        console.log('It is a palindrome Number ' + final);
    } else {
        console.log('Not a Palindrome Number');
    }
}

palindrome(12321);

function recNumPalindrome(n, temp) {
    // base case 
    if (n == 0)
        return temp;
    // stores the reverse of a number 
    temp = (temp * 10) + (n % 10);
    return recNumPalindrome(n / 10, temp);
}

if (recNumPalindrome(121, 0)) {
    console.log('Is a palindrome number');
} else {
    console.log('Not a palindrome number');
}
/**
 * 
 * @param {palindrome string} str 
 */
function strPalindrome(str) {
    const cleanStr = str;
    const reverseStr = cleanStr.split('').reverse().join('');
    if (reverseStr === cleanStr) {
        console.log('It is a palindrome string');
    }

}
strPalindrome('abcba');

/**
 * recurrsive - without built in function
 * @param {*palindrome} str 
 */
function recStrPalindrome(str) {
    const cleanStr = str;
    const strLength = cleanStr.length;
    if (strLength === (0 || 1)) {
        return true;
    }
    if (cleanStr[0] === cleanStr[strLength - 1]) {
        return recStrPalindrome(cleanStr.slice(1, strLength - 1));
    }
    return false;
}

if (recStrPalindrome('abcba')) {
    console.log('recStrPalindrome is a Palindrome');
} else {
    console.log('recStrPalindrome is not a Palindrome');
}

/**
 * 
 * @param {*} str 
 */
function everyPalindrome(str) {
    const cleanStr = str;
    return cleanStr.split('').every((c, i) => c === cleanStr[cleanStr.length - 1 - i]);
}

console.log('everyPalindrome', everyPalindrome('abcba'));

/**
 * Without built in function
 * @param {*} str 
 */
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toString().toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log('without built in function', palindrome("A man, a plan, a canal. Panama"));

// array of palindrome
var combinations = function (string) {
    var result = [];
    var loop = function (start,depth,prefix) {
        for (var i=start; i<string.length; i++) {
            var next = prefix+string[i];
            if (depth > 0) {
                loop(i+1,depth-1,next);
            } else {
                //check for Palindrome
                if (next == next.split('').reverse().join('')) {
                    result.push(next);
                }
            }
        }
    }
    for (var i=0; i<string.length; i++) {
        loop(0,i,'');
    }
    //remove duplicate
    result = result.filter(function(val, ind){
      return result.indexOf(val)==ind;
    });
    return result;
}

console.log('combinations', combinations('racecarzz'));

const p = s=> s==[...s].reverse().join('')
console.log('Is palidrome', p('racecar'));

let s = 'hello';
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
console.log('occurence', result);

let str = "atul kumar srivastava";
let obj ={};
for(let s of str)if(!obj[s])obj[s] = 1;else obj[s] = obj[s]  + 1;
console.log('occurence', obj);

var theString = "This is a string.";
console.log(theString.split("is").length - 1);

var temp = "This is a string.";
var count = (temp.match(/is/g) || []).length;
console.log(count);