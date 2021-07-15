const years = [1990, 1991, 1992];
var ages = years.map(function (el) {
    return 2016 - el;
})
console.log('&&&&&&&&&&&&&&', ages);

var ages1 = years.map(el => 2019 - el);
console.log('++++++++++++', ages1);
//old
function addF(a, b, c) {
    return a + b + c;
}
var ag = [18, 32, 45];
var sum = addF.apply(null, ag);
console.log('------------', sum);

// new 
const sum1 = addF(...ag);
console.log('////////////', sum1);

const fName = ['chethan', 'ravi', 'sachin'];
const lName = ['babu', 'naik', 'omprakash'];
console.log('---***names***---', [...fName, ...lName]);
// ES6 class
class Person {
    constructor(name, yob, job) {
        this.name = name,
            this.yob = yob,
            this.job = job
    }
    calc() {
        const age = new Date().getFullYear - this.yob;;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there');
    }
}
const chethan = new Person('chethan', 1993, 'Dev');
console.log('%#$#$#^#', chethan);