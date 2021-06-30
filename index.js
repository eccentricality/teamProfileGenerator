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

// generate initial html to be populated with details
function generateInitialHtml(){
return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team Full Roster</title>

    <link rel="stylesheet" href="./reset.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./fullRoster.css">
    

</head>

<body>

    <nav class="navBar">
        <h2>My Team</h2>
    </nav>

    <section class="cardContainer">`
}

// function to help iterate over teammates within html generating function
function generateTeammate(managerTeammates){
    return `<main class="rosterCard">

    <figure class="rosterTitle">
        <h3>${managerFullTeam.returnName()}</h3>
        <h3>${managerFullTeam.returnRole()}</h3>
    </figure>

    <figure class="rosterBody">
        <ul class="detailsList">
            <li class="memberDetails">Name</li>
            <li class="memberDetails">ID: ${managerFullTeam.returnId()}</li>
            <li class="memberDetails">Email: <a href="mailto:${managerFullTeam.returnEmail()}">${managerFullTeam.returnEmail()}</a></a></li>
            ${managerFullTeam.returnRoleInfo()}
        </ul>
    </figure>

</main>`;
}

// function to close html tags once all members are added in
function closeHtmlTags(){
    return `    </section>

    
    </body>
    </html>`
}

// loops through full team to generate html of the entire team
function generateFullTeam(){
    // create new file or overwrite if it exists
    fs.writeFileSync(generatedHtml, '');
    console.log(managerFullTeam)

    // store initial html
    let initialHtml = generateInitialHtml();

    // iterate over the team members
    for (let teammate in managerFullTeam){
        initialHtml += generateTeammate(managerFullTeam[teammate]);
    }

    // close the html tags to generate final product
    initialHtml += closeHtmlTags();

    // write the final product to file
    fs.writeFileSync(closeHtmlTags,initialHtml);
}