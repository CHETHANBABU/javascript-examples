/**
 * A prime number (or a prime) is a natural number greater than 1
 * that has no positive divisors other than 1 and itself.
 */
function test_prime(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(test_prime(37));

function checkPrime(n) {
    var n, i, flag = true;
    // Getting the value form the 
    // text field using DOM 
    n = parseInt(n)
    for (i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
    // Check and display output 
    if (flag == true)
        console.log(n + " is prime");
    else
        console.log(n + " is not prime");
}
checkPrime(13);

function primeArr(enterNumber) {
    var arr = [];
    for(var i=2; i<=enterNumber ;i++){
        var isPrime = true;
        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime === true){
            arr.push(i);
        }
    }
    console.log('prime arr', arr);
}
primeArr(10);
// --------------------------------------
function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}
console.log('primeFactorsTo', primeFactorsTo(5));

function primeArr(number) {
    var prime = [2,3,5,7];
    var arr = [];
    for(var x = 0; x < number; x++){
        var isPrime = prime.map(n => x%n > 0).filter(t => !t).length <= 0;
        if(isPrime || prime.includes(x)){
            arr.push(x);
       }
    }
    console.log('primeArr', arr);
}
primeArr(10);
