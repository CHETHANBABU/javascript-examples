var years = [1990, 1991, 1992, 1993, 1994, 2012];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));        
    }
    return arrRes;
}
function calC(y) {
    return 2019 - y;    
}

function isFullAges(y) {
    return y >= 18;    
}
var ages = arrayCalc(years, calC);
var fullAges = arrayCalc(ages, isFullAges);
console.log('Result', ages);
console.log('is Res', fullAges);