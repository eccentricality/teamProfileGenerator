// import classes & inquirer
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
// import fs to generate html
const fs = require('fs');
// html file path variable
const generatedHtml = './dist/fullRoster.html'

// array of full team members
let managerFullTeam = [];

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
        choices: ['Intern', 'Engineer']
    }
])
.then(response => {
    // create the manager
    let manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum)
    // add to array of full team
    managerFullTeam.push(manager);
    // call either intern or engineer to be created and added to team, else exit and create html
    checkFullTeam(response.managerTeamList);
})

// function to call in order to add intern when selected as a team member
function managerAddIntern(){
    // generate questions via inquirer to generate an intern member
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: 'Enter the Intern\'s Name:',
        },
        {
            name: 'internId',
            type: 'input',
            message: 'Enter the Intern\'s ID:',
        },
        {
            name: 'internEmail',
            type: 'input',
            message: 'Enter the Intern\'s Email:',
        },
        {
            name: 'internSchool',
            type: 'input',
            message: 'Enter the Intern\'s School:',
        },
        {
            name: 'managerTeamList',
            type: 'list',
            message: 'Who else would you like to add to this team?',
            choices: ['Intern', 'Engineer', 'Exit']
        }
    ])
    .then(response => {
        // create a new intern
        let intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        // add to array of full team
        managerFullTeam.push(intern);

        checkFullTeam(response.managerTeamList);
    })
}

// function to call in order to add engineer when selected as a team member
function managerAddEngineer(){
    // generate questions via inquirer to generate an engineer member
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: 'Enter the Engineer\'s Name:',
        },
        {
            name: 'engineerId',
            type: 'input',
            message: 'Enter the Engineer\'s ID:',
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: 'Enter the Engineer\'s Email:',
        },
        {
            name: 'engineerGithub',
            type: 'input',
            message: 'Enter the Engineer\'s GitHub Username:',
        },
        {
            name: 'managerTeamList',
            type: 'list',
            message: 'Who else would you like to add to this team?',
            choices: ['Intern', 'Engineer', 'Exit']
        }
    ])
    .then(response => {
        // create a new engineer
        let engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        // add to array of full team
        managerFullTeam.push(engineer);

        checkFullTeam(response.managerTeamList);
    })
}

// function to check for team member and call for additional team members based on selection by user
function checkFullTeam(member){
    if (member === 'Intern'){
        managerAddIntern();
    }
    else if (member === 'Engineer'){
        managerAddEngineer();
    }
    else {
        // exit team creation adn generate html
        generateFullTeam();
    }
}

// loops through full team to generate html of the entire team
function generateFullTeam(){
        // create new file or overwrite if it exists
    fs.writeFileSync(generatedHtml, '');
    console.log(managerFullTeam)
}