function square(x){
    return x * x;
};

console.log(square(5));


// Arrow functions are always anonymous. There's no way to define a named arrow
// function, other than to assign it to a variable.
const squareArrow = (x) => x * x;

const getFirstName = (name) => name.split(" ")[0]

console.log(getFirstName('Mike Smith'));


const multiplier = {
    numbers: [4,5],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());