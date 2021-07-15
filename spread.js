/**
 * Rest Parameter [ …rest]
 * It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”)
 * into an array
 * ----------------------------------------------------------------------------------------------------
 * Spread Operator [ …spread]
 * It’s the opposite to rest parameter , where rest parameter collects items into an array,
 * the spread operator unpacks the collected elements into single elements.
 */

// mutation links -  https://stackoverflow.com/questions/33053310/remove-value-from-object-without-mutation

// test 01
var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];
console.log("test 01", arr);

// test 02
var arr1 = [1, 2, ...mid, 5, 6];
console.log("test 02", arr1);

// test 03
var max = Math.max(...arr1);
console.log("test 03 max", Math.max(arr1));
console.log("test 03", max);

// Copy an Array
var chararr = ['a', 'b', 'c'];
var arr2 = chararr;
console.log("Copy an Array 1", arr2);
arr2.push('d');
console.log("Copy an Array 2", chararr, "arr2", arr2);

var arr3 = [...chararr];
arr3.push('e');
console.log("Copy an Array 3", chararr, "arr3", arr3);

// String to Array
var str = "hello";
var chars = [...str];
console.log("String to Array", chars);

const items = ['This', 'is', 'a', 'sentence'];
console.log("items line 1", items) // Line 1
console.log("items line 2", ...items) // Line 2

const [ firstLetter, ...restOfTheLetters ] = 'Codeburst';
console.log("letters", firstLetter, restOfTheLetters);

/**
 * Destructing is a fun practice that I'm using a ton of on my React projects,
 * as well as other Node.js apps
 */
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let {...a} = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
console.log('a', a);

// ----------------- Rest Parameters --------------------------
function sum(a, b) {
    return a + b;
  }
  
  console.log("sum", sum(1, 2, 3, 4, 5));

  function sumAll(...args) { // args is the name for the array
    let sum = 0;  
    for (let arg of args) sum += arg;  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6

  function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log("titles length", titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");

  // Object Destructuring
  let { m, ...remaining } = { m: 1, a: 2, b: 3, c: 4 };
console.info("m", m); // 1
console.info(remaining); // {a: 2, b: 3, c: 4}

// shallow clone
let existingObject = { x: 1, foo: () => {} };
let newObject = { ...existingObject };
console.info("shallow clone", newObject); // {x: 1, foo: ƒ}
console.log("type", typeof(typeof(25)), "--", typeof(25));
