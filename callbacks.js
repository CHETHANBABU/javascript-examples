// callback return values
function foo(address, fn){
    console.log('called');
    fn(`${address} is my name`);
  }
  
  foo("chethan", function(value){
    console.log(value); // this is where you get the return value
  });

  // initialContext calling
loadInitScripts(() => {
    console.log('script load');
});

// initialContext defining
function loadInitScripts(callback) {
    console.log('call back');
    callback();
}

// another callback2 sum defining 
function sum(callback, a, b) {
    console.log('SUM', a + b);
    callback(a + b);
}
// calling sum
sum(function disp(value) {
    console.log('anvavnabvan', value);
}, 3, 4);