import { squareNum, add } from "./utils.js";
import divide from "./utils.js";

console.log(squareNum(4), add(4,5));
console.log(divide(10,2));


import isSenior, { isAdult, canDrink } from "./isAdult.js"

const age = 65;
console.log(isAdult(age));
console.log(canDrink(age));
console.log(isSenior(age));
console.log(".......")

// Importing external modules. Use name of module, not relative link.
import validator from "validator";

console.log(validator.isEmail("test"));
console.log(validator.isEmail("harrisoncramer@gmail.com"));

// Like importing the react or reactDOM modules.
import React from "react";
import ReactDOM from "react-dom";

// The JSX is automatically parsed because we've added the babel to our flow. To do this we:
// 1. Installed babel-core and babel-loader modules
// 2. Added the presets into the .babelrc file
// 3. Added the module/rule to our webpack.config.js file, which tells babel when we want it to compile a file (whenever it sees a file that ends in .js)
const template = <p>THIS IS JSX FROM WEBPACK</p>
ReactDOM.render(template, document.getElementById("app"));