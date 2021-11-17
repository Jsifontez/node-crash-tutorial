// const xyz = require('./people');
// a way to import something specifically from a module you can use destructuring
const { people, ages } = require('./people')

// to avoid that xyz became an empty object you need to export something from people.js
console.log(people, ages); // empty object if nothing in people is exported
// console.log(people) // people is not defined in this file

// os for operating systems is a core module of node
const os = require('os');
console.log(os.platform(), os.homedir())