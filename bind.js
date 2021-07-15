/**
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value,
 * with a given sequence of arguments preceding any provided when the new function is called.
 * -------------------------------------------------------------------------------------------
 * bind() returns a bound function that, when executed later,
 * will have the correct context ("this") for calling the original function.
 * So bind() can be used when the function needs to be called later in certain events when it's useful.
 */
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  
  var unboundGetX = module.getX;
  console.log("unboundGetX()", unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = unboundGetX.bind(module);
  console.log("boundGetX()", boundGetX());
  // expected output: 42
  // ------------------------------------------------------------------------------------
  var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB