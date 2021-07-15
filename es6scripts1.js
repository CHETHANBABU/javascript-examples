/**
 * 1. Remove duplicates from an array of numbers/strings
 * Well, this is the only one not about map/reduce/filter, 
 * but it’s so compact that it was hard not to put it in the list. 
 * Plus we’ll use it in a few examples too.
 */
const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];
console.log('uniqueValues', uniqueValues);

/**
 * 2. A simple search (case-sensitive)
 * The filter() method creates a new array with all elements that 
 * pass the test implemented by the provided function.
 */
const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

let res1 = users.filter(it => it.name.includes('oli'));
console.log('simple search (case-sensitive)', res1);

/**
 * 3. A simple search (case-insensitive)
 */
let res2 = users.filter(it => new RegExp('oli', "i").test(it.name));
console.log('simple search (case-insensitive)', res2);

/**
 * 4. Check if any of the users have admin rights
 * The some() method tests whether at least one element 
 * in the array passes the test implemented by the provided function.
 */
const hasAdmin = users.some(user => user.group === 'admin');
console.log('hasAdmin', hasAdmin);

/**
 * 5. Flattening an array of arrays
 */
const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat1 = nested.reduce((acc, it) => [...acc, ...it], []);
console.log('flat 1', flat1);
let flat2 = nested.reduce((acc, it) => [...acc, ...it]);
console.log('flat 2', flat2);
let flat3 = [].concat.apply([], nested);
console.log('flat 3', flat3);

/**
 * 6. Create an object that contains the frequency of the specified key
 */
const groupByAge = users.reduce((acc, it) => {
    acc[it.age] = acc[it.age] + 1 || 1;
    return acc;
}, {});
console.log('frequency of the specified key', groupByAge);

/**
 * 7. Indexing an array of objects (lookup table)
 * Instead of processing the whole array for finding a user by id,
 * we can construct an object where the user’s id represents a key (with constant searching time).
 */
const uTable = users.reduce((acc, it) => (acc[it.id] = it, acc), {});
console.log('Indexing an array of objects', uTable);

/**
 * 8. Extract the unique values for the given key of each item in the array
 * Let’s create a list of existing users’ groups.
 * The map() method creates a new array with the results of calling a provided
 * function on every element in the calling array.
 */
const listOfUserGroups = [...new Set(users.map(it => it.group))];
console.log('uniqu values listOfUserGroups', listOfUserGroups);

/**
 * 9. Object key-value map reversal
 * This one-liner looks quite tricky.
 * We use the comma operator here, and it means we return the last value in parenthesis — acc.
 */
const cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
};

let countries1 = Object.keys(cities).reduce(
    (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc), {});
console.log('Object key-value map reversal - 1', countries1);

/**
 * Here we don’t use spread operator — it creates a new array on each reduce() call,
 * which leads to a big performance penalty: O(n²). Instead the old good push() method.
 */

let countries2 = Object.keys(cities).reduce((acc, k) => {
    let country = cities[k];
    acc[country] = acc[country] || [];
    acc[country].push(k);
    return acc;
}, {});
console.log('Object key-value map reversal - 2', countries2);

/**
 * 10. Create an array of Fahrenheit values from an array of Celsius values
 */
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(t => t * 1.8 + 32);
console.log('fahrenheit', fahrenheit);

/**
 * 11. Encode an object into a query string
 */
const params = { lat: 45, lng: 6, alt: 1000 };
const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
console.log('queryString', queryString);

/**
 * 12. Print a table of users as a readable string only with specified keys
 */
users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('');
console.log('table of users as a readable string', users);

/**
 * JSON.stringify can make the string output more readable, but not as a table
 */
console.log('JSON.stringify', JSON.stringify(users, ['id', 'name', 'group'], 2));

/**
 * 13. Find and replace a key-value pair in an array of objects
 */
const updatedUsers = users.map(
    p => p.id !== 47 ? p : { ...p, age: p.age + 1 }
);
console.log('key-value pair in an array of objects', updatedUsers);

/**
 * 14. Union (A ∪ B) of arrays
 */
const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];
const result = [...new Set([...arrA, ...arrB])];
console.log('Union (A ∪ B) of arrays', result);

/**
 * 15. Intersection (A ∩ B) of arrays
 */
const arrA1 = [1, 4, 3, 2];
const arrB1 = [5, 2, 6, 7, 1];
const result1 = arrA1.filter(it => arrB1.includes(it));
console.log('Intersection (A ∩ B) of arrays', result1);

/**
 * 16. Counting the occurence ECMAScript2015
 */
const tempA = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const aCount = new Map([...new Set(tempA)].map(
    x => [x, tempA.filter(y => y === x).length]
));
console.log('Counting the occurence ECMAScript2015 - 1', aCount);

function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}
console.log('Counting the occurence ECMAScript2015 - 2', count(tempA));

let acc = tempA.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
console.log('Counting the occurence ES6', acc);

var s = "ABRACADABRA";
console.log('count characters', JSON.stringify(
    s.split('').reduce((a, c) => { a[c]++ ? 0 : a[c] = 1; return a }, {})
));

/**
 * 17. Remove the duplicate elements
 * Set is a new data object introduced in ES6. Because Set only lets you store unique values.
 * When you pass in an array, it will remove any duplicate values.
 */
console.log('Remove the duplicate elements - Set', Array.from(new Set(tempA)));
let F = tempA.filter((Item, Ind) => {
    tempA.indexOf(Item) !== Ind;
});
console.log('Remove the duplicate elements - Filter', F);
let R = tempA.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
}, []);
console.log('Remove the duplicate elements - Reduce', R);

// rename key code 1
const old_obj = {
    k1: `111`,
    k2: `222`,
    k3: `333`
};
const newKey = 'k4';
const oldKey = 'k2';
delete Object.assign(old_obj, {[newKey]: old_obj[oldKey] })[oldKey];
console.log('rename old_obj', old_obj);

// rename key code 2
let rObj = { name: 'Bobo' }
rObj.somethingElse = rObj.name
delete rObj.name
console.log('rename obj', rObj);

