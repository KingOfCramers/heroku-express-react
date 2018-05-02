
// CLASS PROPERTIES, USING BABEL "transform-class-properties" plugin. This allows us to set our class methods as arrow functions, which automatically bind to the parent class. This allows us to avoid using a constructor function, and automatically binds the event handlers to our class, without the this.bind() syntax.

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        console.log("Hi my name is " + this.name);
    }
};

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

class NewSyntax {
    name = "Jen"; // Define name w/out var, this, const, etc.
    getGreeting = () => {
        console.log("Hi my name is " + this.name);
    } // Arrow functions AUTOMATICALLY get bound to the instance of the class.
}

const newSyntax = new NewSyntax();
console.log(newSyntax.getGreeting());