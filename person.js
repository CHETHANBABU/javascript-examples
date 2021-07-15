/*******************
 * function constructor
 */
var Person = function (name, yob, job) {
    this.name = name,
    this.yob = yob,
    this.job = job
}
// inheritance using prototype
Person.prototype.calcAge = function () {
        console.log(2019 - this.yob);
}
Person.prototype.lastName = 'Babu';
// instans iation
var chethan = new Person('chethan', 1993, 'Developer');
chethan.calcAge();
console.log(chethan.name + ' ' + chethan.lastName);
console.log(chethan.hasOwnProperty('name'));
console.log(chethan instanceof Person);
