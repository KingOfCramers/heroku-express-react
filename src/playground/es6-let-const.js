let nameLet = "Jen";
nameLet = "Patrick";
// cannot redefine --> let nameLet = "Patrick"
console.log("nameLet", nameLet);

var nameVar = "Harrison";
console.log("nameVar", nameVar);

const nameConst = "Peter";
console.log(nameConst);

var fullName = "Harrison Cramer";

if (fullName){
    const firstName = fullName.split(' ')[0];
    var lastName = fullName.split(' ')[1];
    console.log(firstName);
}

console.log(lastName);
console.log(firstName); // Const and let are BLOCK scoped (if this was)
// a var, it would have worked, because the 'if' statement above is
// not a function. If you wanted to log out the firstName, you could
// define it prior to the 'if' code block.
