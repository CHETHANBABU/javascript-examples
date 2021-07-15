/**************************
 * this keyword examples starts from here,
 * the this keyword points at the global object, (the window object,
 * in the browser or coding window object)
 */
console.log(this);

//-----------------
calculateAge(1993);

function calculateAge(year) {
    console.log(2019 - year);
    console.log('line 13', this);
}
//---------------------------
var john = {
    name: 'Chethan',
    yob: 1993,
    calculateAge: function () {
        console.log('20', this); // this keyword refers to john object
        console.log(2019 - this.yob);
        function innerObj() {
            console.log('23', this); // refers to window object
        }
        innerObj();
    }
}

john.calculateAge();

//------------method barowing
var mike = {
    name: 'Vignesh',
    yob: 1991
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();