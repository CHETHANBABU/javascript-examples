/**
 * A mutable object is an object whose state can be modified after it is created.
 * In simple terms mutable means “ subject to change or alteration”
 * Example: https://doesitmutate.xyz/
 */
var arr = [1];
var new_arr = arr.push(2);
console.log('mutable', arr);
// ------------------------------------------------------------------------------------
let a = {
    foo: 'bar'
};
let b = a;
b.foo =  'test2'
console.log(b.foo); // test2
console.log(a === b) // true
// ------------------------------------------------------------------------------------
function mutation(originalArray) {
    // directly mutating/modifying the original array
    originalArray[0] = "new value";
    return originalArray;
  }

  var array = ["some value", "another value"];
  console.log("Return from mutation " + mutation(array));
  console.log("Array: " + array + " (original array has been altered).");

/**
 * An immutable object is an object whose state cannot be modified after it is created.
 * immutable means “unalterable”
 */
var name = 'Bill';
var full_name = name.concat(' Gates');
console.log('immutable', name);
// -------------------------------------------------------------------------------------
let c = {foo: "bar"};
let d = Object.assign({},c);
d.foo = "bar2"
console.log(c); // {foo: "bar"}
console.log(d);// {foo: "bar2"}
console.log(d === c) // false
// -------------------------------------------------------------------------------------
function immutable(originalArray) {
    // Instead of mutating/modifying the original array,
    // we first make a copy of the original array
    // In this way, the original array stay unchanged.
    var newArray = [...originalArray];
    newArray[0] = "new value";
    return newArray;
  }

  var array1 = ["some value", "another value"];
  console.log("Return from immutable " + immutable(array1));
  console.log("Array: " + array1 + " (original array stay unchanged).");
