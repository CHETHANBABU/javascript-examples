class Human {
    constructor() {
        this.gender = 'FeMale';
    }
    printGender() {
        console.log('gender', this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        console.log('gender', this.gender)
        this.name = 'Chethan';
        this.gender = 'Male';
    }

    printName() {
        console.log('name', this.name, this.printGender());        
    }
}
const person = new Person();
person.printName();
person.printGender();