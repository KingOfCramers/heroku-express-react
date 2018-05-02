class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hello, my name is ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age); // Call the parent constructor function.
        this.major = major;
    }
    hasMajor(){
        return !!this.major; // flipping undefined twice returns false. Otherwise, returns truthy value (string flipped 2x).
    }
    isDecided(){
        return `I ${!!this.major ? "do" : "do not"} have a major!`
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` My major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name,age,location = "Nowhere"){
        super(name,age);
        this.location = location;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.location){
            greeting += ` I am from ${this.location}.`
        }
        return greeting;
    }
}

const me = new Student("Harrison",24,"Political Science");
const you = new Student();
const waldo = new Traveler("Waldo",15,"Paris");


console.log(me.getDescription())
console.log(waldo.getGreeting())