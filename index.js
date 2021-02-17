// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateTeamProfile = require("./");

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([     
        {
            type: 'input', 
            message: 'What is the team manager\'s name?',
            name: 'manager name',
            default: 'input'
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s ID',
            name: 'manager id',
            default: 'number'
            // message to say: Please enter a positive number greater than zero
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s email?',
            name: 'manager email',
            default: 'input'
           
        },
        {
            type: 'input', 
            message: 'What is the team manager\'s office number?',
            name: 'manager office number',
            default: 'input'
        },
        {
            type: 'choices',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input
        },
        {
            type: 'input', 
            message: 'What is your engineer\'s name?',
            name: 'engineer name',
            default: 'input'
        },   
        {
            type: 'input', 
            message: 'What is your engineer\'s ID?',
            name: 'engineer id',
            default: 'number'
        
            // message to say: Please enter a positive number greater than zero
        },          
        {
            type: 'input', 
            message: 'What is your engineer\'s email?',
            name: 'engineer email',
            default: 'input'
        },
        {
            type: 'input', 
            message: 'What is your engineer\'s GitHub username?',
            name: 'engineer github',
            default: 'input'
        }, 
        {
            type: 'choices',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input
        },  
        {
            type: 'input', 
            message: 'What is your intern\'s name?',
            name: 'intern name',
            default: 'input'
        },   
        {
            type: 'input', 
            message: 'What is your intern\'s ID?',
            name: 'intern id',
            default: 'number'
            // message to say: Please enter a positive number greater than zero
        },          
        {
            type: 'input', 
            message: 'What is your intern\'s email?',
            name: 'intern email',
            default: 'input'
        },
        {
            type: 'input', 
            message: 'What is your intern\'s school?',
            name: 'intern school',
            default: 'input'
        },
        {
            type: 'choices',
            message:'Which type of team member would you like to add?', 
            name: 'team member type',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input and end when you do not want to enter anymore
        },  
    ]).then(data => {

        // console.log(data)

        // const content = generateMarkdown(data)        
        
        // fs.writeFile("README.md", content, err => {
        //     if(err) console.log(err);
        //     else console.log("success!");
        // });

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
