// /**
//  * To run this file in Gitpod, use the 
//  * command node arrow-functions.js in the terminal
//  */

// // Vanilla JavaScript Function
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// let sum = addNumbers(1, 2);
// console.log(sum);

// // Arrow Function With Parameters
// const addNumbersArrowParams = (num1, num2) => {
//     return num1 + num2;
// }
// let sumArrowParams = addNumbersArrowParams(2,2)
// console.log(sumArrowParams);

// // Single Line Arrow Function With Parameters. Returns what comes after fat arrow.
// // only use when simple function. if longer, more complex use curly brackets
// // and user return as normal
// const addNumbersSingleLineArrowParams = (num1, num2) => num1 + num2;

// // can have brackets around part after fat arrow
// // const addNumbersSingleLineArrowParams = (num1, num2) => (num1 + num2)
// let sumSingleLineArrow = addNumbersSingleLineArrowParams(30, 2)
// console.log(sumSingleLineArrow);


// // Implicit Returns
// // if only 1 param dont need parentheses around it...
// const saySomething = message => console.log(message);
// saySomething('Hello Diggler!')

// // if function doesnt take any arguments, use empty parentheses to tell JS you are declaring a function
// const sayHello = () => console.log('hello');
// sayHello();

// // Returning Multiple Lines of code, parentheses are needed to wrap the code to be returned after fat arrow.
// const returnMultipleLines = () => (
//     `<p>
//         I am a multi string!
//     </p>`
// )

// console.log(returnMultipleLines());


// let students = [
//     {
//         name: 'John',
//         subjects: ['maths', 'english', 'cad'],
//         teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//         results: {maths: 90, english: 75, cad: 87},
//     },
//     {
//         name: 'Emily',
//         subjects: ['science', 'maths','english', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
//         results: {science: 93, maths: 95, english: 80, art: 95},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 63, maths: 79, art: 95},
//     }
// ];

// const averagePoints = (arr, subject) => {
//     totalPoints = 0;
//     numOfStudents = 0;
//     for (let itm of arr) {
//         if (itm.subjects.includes(subject)) {
//             totalPoints += itm.results[subject];
//             numOfStudents += 1;
//         }
//     }
//     return totalPoints / numOfStudents;
// }

// let result = averagePoints(students, 'art');
// console.log(result);


// https://www.youtube.com/watch?v=h33Srr5J9nY&t=222s

function sum(a, b) {
    return a + b;
}

sumA = (a, b) => a + b;
// console.log(sumA(4,1));

function isPossitive(num) {
    return num >= 0;
}

let isPossitiveA = num => num >= 0
// console.log(isPossitiveA(-3));

// FUNCTION WITHOUT ARGUMENTS
// = () before callback to let JS know it's a function
function sayHi() {
    console.log("HELLO WORLD!");
}

sayHi();
sayHello = () => console.log("hello");

sayHello();


// ANONYMOUS FUNCTIONS ie. have no name

// document.addEventListener('click', function() {
//     console.log('Click');
// })

document.addEventListener('click', () => {
    console.log('click');
})

document.addEventListener('click', () => console.log('click'));