/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addNumbers(num1, num2) {
    return num1 + num2;
}
let sum = addNumbers(1, 2);
console.log(sum);

// Arrow Function With Parameters
const addNumbersArrowParams = (num1, num2) => {
    return num1 + num2;
}
let sumArrowParams = addNumbersArrowParams(2,2)
console.log(sumArrowParams);

// Single Line Arrow Function With Parameters. Returns what comes after fat arrow.
// only use when simple function. if longer, more complex use curly brackets
// and user return as normal
const addNumbersSingleLineArrowParams = (num1, num2) => num1 + num2;

// can have brackets around part after fat arrow
// const addNumbersSingleLineArrowParams = (num1, num2) => (num1 + num2)
let sumSingleLineArrow = addNumbersSingleLineArrowParams(30, 2)
console.log(sumSingleLineArrow);


// Implicit Returns
// if only 1 param dont need parentheses around it...
const saySomething = message => console.log(message);
saySomething('Hello Diggler!')

// if function doesnt take any arguments, use empty parentheses to tell JS you are declaring a function
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines of code, parentheses are needed to wrap the code to be returned after fat arrow.
const returnMultipleLines = () => (
    `<p>
        I am a multi string!
    </p>`
)

console.log(returnMultipleLines());