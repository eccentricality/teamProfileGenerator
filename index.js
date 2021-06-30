// import classes & inquirer
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
// import fs to generate html
const fs = require('fs');
// html file path variable
const generatedHtml = './'

// generate questions via inquirer to create initial manager to lead team
inquirer.prompt([
    {
        name: 'managerName',
        type: 'input',
        message: 'Enter the Manager\'s Name:',
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'Enter the Manager\'s ID:',
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'Enter the Manager\'s Email:',
    },
    {
        name: 'managerOfficeNum',
        type: 'input',
        message: 'Enter the Manager\'s Office Number:',
    },
    {
        name: 'managerTeamList',
        type: 'list',
        message: 'Who would you like to add to this team?',
        choices: ['Engineer', 'Intern']
    }
])
.then(response => {
    // create new file or overwrite if it exists
    fs.writeFileSync(generatedHtml, '');
})