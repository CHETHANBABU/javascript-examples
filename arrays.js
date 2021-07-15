const list = require('./mock/list');

function removeByFilter(array, index) {
    console.log('indes', index);
    return array.filter((el, ind) => ind !== index)
}

function removeBySplice(array, index) {
    if (index !== -1) {
        array.splice(index, 1);        
    }
    return array;
  }

/*******************
 * Arrays
 */
let names = ['chethan', 'venkatesh', 'babu'];
let num = new Array(1990, 1991, 1993);
console.log(names);
console.log(num.length);
// console.log('removeByFilter', removeByFilter(list, 2));
console.log('removeBySplice', removeBySplice(list, 1));


