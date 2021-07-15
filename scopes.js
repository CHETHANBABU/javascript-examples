var a = 'Hello'; // Global scope
first();

function first() {
    var b = 'Hi'; // local scope
    console.log(a + b); // VO (1st level) + VO (global)
    second();

    function second() {
        var c = 'Namaste'; // local scope
        console.log(a + b + c); // VO (1st) + VO (2nd) + VO (global)
    }

    // third(); // scope chain is not in place
}

function third() {
    var d = 'chenagidira?' 
    console.log(a + b + c + d); // throws an error b is not defined
}

