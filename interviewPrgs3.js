/** Unique characters / elements */
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
console.log('unique using filter = ', unique);

var myArray1 = ['a', 1, 'a', 2, '1'];
let unique1 = [...new Set(myArray1)];
console.log('unique using set = ', unique1);

var items = [4, 5, 4, 6, 3, 4, 5, 2, 23, 1, 4, 4, 4]
var uniqueItems = Array.from(new Set(items))
console.log('unique using array from = ', uniqueItems);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 1];
function toUnique(a, b, c) { //array,placeholder,placeholder
    b = a.length;
    while (c = --b)
        while (c--) a[b] !== a[c] || a.splice(c, 1);
    return a // not needed ;)
}
console.log('unique without using inbuilts', toUnique(array));


/** Find longest word in a string */
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0, word;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return word;
}
console.log('longest word using split and for / forEach =', findLongestWord("The quick brown fox jumped over the lazy dog"));

function findLongestWord1(str) {
    var longestWord = str.split(' ').sort(function (a, b) { return b.length - a.length; });
    return longestWord[0];
}
console.log('longest word using split and sort =', findLongestWord1("The quick brown fox jumped over the lazy dog"));

function findLongestWord2(str) {
    var longestWord = str.split(' ').reduce(function (longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}
console.log('longest word using split and reduce =', findLongestWord2("The quick brown fox jumped over the lazy dog"));

/** Reverse a string */
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log('reverse a string', reverseString("hello"));

function reverseString1(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log('reverse a string without inbuilt', reverseString1("hello"));

function reverseString2(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log('reverse a string using recursion', reverseString2("hello"));

/** Factorialize */
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log('factorial recursion = ', factorialize(5));

function factorialize1(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
console.log('factorial = ', factorialize1(5));

function factorialize2(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log('factorial = ', factorialize2(5));

/** Max and Min element in an array */
const array1 = [1, 3, 2];
console.log('Max', Math.max(...array1));
console.log('Min', Math.min(...array1));

const array = [-1,0,3,100, 99, 2, 99];
function biggestNumberInArray(array) {
  return array.reduce((m, c) => c > m ? c : m);
}
console.log('biggestNumberInArray', biggestNumberInArray(array));

/** Second larget and smallest in an array */
var arr = ['20','120','111','215','54','78'];
arr.sort(function(a,b){
    return b-a;
});
console.log('second largest', arr[1], 'second smallest', arr[arr.length - 2]);



