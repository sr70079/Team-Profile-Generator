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
const managerQuestons = () => {
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

    ]).then(data => {


        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
        team.push(manager)
        
        console.log(team)
        
        employeeTypeQuestion ();

    });

}


const engineerQuestions = () => {
    inquirer.prompt([ 
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
            name: 'engineerEmail',
        },
        {
            type: 'input', 
            message: 'What is your engineer\'s GitHub username?',
            name: 'engineerGithub',
        }, 

    ]).then(data => {

        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        team.push(engineer)
        
        console.log(team)

        employeeTypeQuestion ();      
        
    });

}

const internQuestions = () => {
    inquirer.prompt([ 
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

    ]).then(data => {

        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        team.push(intern)
        
        console.log(team)

        employeeTypeQuestion ();   

    });

}

const employeeTypeQuestion = () => {
    inquirer.prompt([ 

        {
            type: 'list',
            message:'Which type of team member would you like to add?', 
            name: 'teamMemberType',
            choices: ["Engineer", "Intern", "I do not want to add anymore team members at this time"]
            // needs to switch to engineer questoins or intern questoins depending on input
        },

    ]).then(choices => {

        if (choices.teamMemberType === 'Engineer') {
            engineerQuestions()
        } else if (choices.teamMemberType === 'Intern') {
            internQuestions()
        } else {
            generateTeam ()
        }

        
    })  

}

function generateTeam() {

    const content = generateTeamProfile(employeeCard())
  
        fs.writeFile('./dist/team.html', content, err => {
            if(err) console.log(err);
            else console.log("success!");
        });

}

const employeeCard = () => {
 
    let cards = "";
   team.forEach(member => {
         
      if(member.getRole() === 'Manager') {
         cards += generateManager(member)
      } 
      if(member.getRole() === 'Engineer') {
        cards += generateEngineer(member)
      } 
      if(member.getRole() === 'Intern') {
        cards += generateIntern(member)
      } 
   })
  return cards;
  }
  

// TODO: Create a function to initialize app
function init() {
    managerQuestons()
}

// Function call to initialize app
init();
