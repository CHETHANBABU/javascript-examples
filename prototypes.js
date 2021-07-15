function Pet(name, species){
    this.name = name;
    this.species = species;
}
function view(){
    return this.name + " is a " + this.species + "!";
}
Pet.prototype.view = view;
function Dog(name){
    Pet.call(this, name, "dog");
}
Dog.prototype = new Pet();
Dog.prototype.bark = function(){
    console.log("Woof!");
}
var pet1 = new Pet('Trudy', 'Bird');
var pet2 = new Dog('Gabriella');
console.log(pet2.view()); // Outputs "Gabriella is a Dog!"
pet2.bark(); // Outputs "Woof!"
pet1.bark(); // Error