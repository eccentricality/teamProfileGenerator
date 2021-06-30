// import classes & inquirer
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');

// create intern to test
let intern = new Intern('Anakin','19','futuresithlord@jedi.com','Coruscant')

// console.log to test intern
console.log(intern.returnName());
console.log(intern.returnId());
console.log(intern.returnEmail());
console.log(intern.returnRole());
console.log(intern.returnSchool());