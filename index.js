// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const generateTeamProfile = require("./src/generateTeamProfile");
const generateManager = require("./src/gererateManager");
const generateEngineer = require("./src/generateEngineer");
const generateIntern = require("./src/generateIntern");

const team = [];

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([     
        {
            type: 'input', 
            message: 'What is the team manager\'s name?',
            name: 'managerName',
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s ID',
            name: 'managerId',
            // validate: function (value) {
            //     var valid = !isNaN(parseFloat(value));
            //     return valid || 'Please enter a number';
            //   },
            //   filter: Number,            
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s email?',
            name: 'managerEmail',
           
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s office number?',
            name: 'managerOfficeNumber',
            
        },
        {
            type: 'list',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input
        },
        {
            type: 'input', 
            message: 'What is your engineer\'s name?',
            name: 'engineerName',
        },   
        {
            type: 'input', 
            message: 'What is your engineer\'s ID?',
            name: 'engineerId',
        },          
        {
            type: 'input', 
            message: 'What is your engineer\'s email?',
            name: 'engineeeEmail',
        },
        {
            type: 'input', 
            message: 'What is your engineer\'s GitHub username?',
            name: 'engineerGithub',
        }, 
        {
            type: 'list',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
        },  
        {
            type: 'input', 
            message: 'What is your intern\'s name?',
            name: 'internName',
        },   
        {
            type: 'input', 
            message: 'What is your intern\'s ID?',
            name: 'internId',
        },          
        {
            type: 'input', 
            message: 'What is your intern\'s email?',
            name: 'internEmail',
        },
        {
            type: 'input', 
            message: 'What is your intern\'s school?',
            name: 'internSchool',
        },
        {
            type: 'list',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input and end when you do not want to enter anymore
        },  
    ]).then(data => {

        console.log(data)

        const content = generateTeamProfile(data)        
        
        fs.writeFile('./dist/team.html', content, err => {
            if(err) console.log(err);
            else console.log("success!");
        });

    });

}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
