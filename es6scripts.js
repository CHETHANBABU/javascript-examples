const D = require('./data');
let data = D.DataList();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let obj = {name: 'Chethan', company: 'Lucida', life: ''}
Object.keys(obj).forEach((K) => (obj[K] === '') && delete obj[K]);
console.log('------------', obj);

let user = {
    name: "John",
    age: 30
  };
  
// loop over values
Object.values(user).forEach(U => console.log('****', U));
Object.keys(user).forEach(U => console.log(U + '---' + user[U]));
// -----------------------------------------
let R = data.filter(F => F.resource.trim() === 'Chethan');

let cSort = R.sort((a, b) => months.indexOf(a.Month) - months.indexOf(b.Month));
console.log('custom sort', cSort);

console.log('Filter by estimate', data.filter(r => r.estimate > 18).length);

