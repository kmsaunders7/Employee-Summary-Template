const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require ('inquirer')
const path = require('path')
const fs = require('fs')


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require('./lib/htmlRenderer')

//start with empty array to hold employees

const employees = []

const addEmpl = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Type of team member you wish to add?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'Finished!'
            ]
        }
    ]).then((answers) => {
        console.log(answers)
        if (answers.role == 'Finished!') {
            finishedProgram()
        }
        else if(answers.role == 'Engineer') {
             createEngineer()
        }
        else if (answers.role == 'Intern') {
            createIntern()
        }
        else if (answers.role == 'Manager') {
            createManager()
        }
    })
}

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the managers id verification?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the managers email?'
        },
        {
            type: 'input',
            name: 'number',
            message: 'what is the managers office number?'
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        employees.push(manager)
        addEmpl()
    })
}


//function for engineer prompts (github)...
const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees legal name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees identification number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?'
        }
    ]).then((answers) => {
        const engineer = new Engineer (answers.name, answers.email, answers.id, answers.gitHub)
        employees.push(engineer)
        //run main init function
        addEmpl()
    })
}

//function for intern prompts (school)...
const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees legal name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees identification number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees email address?'
        },
        {
            type: 'input',
            name: 'schoolName',
            message: 'What school is the employee currently enrolled?'
        }
    ]).then((answers) => {
        const intern = new Intern (answers.name, answers.email, answers.id, answers.schoolName)
        employees.push(intern)
        //run main init function
        addEmpl()
    })
}

// begins the entire set of questions(prompts) by creating the initial manager of the team
addEmpl();

//calls the function to create the html file by putting the employee array into render function
function finishedProgram() {
    fs.writeFile(outputPath, render(employees), function(error) {
        if (error) {
            console.log('error')
        }
    })
    console.log("Website has been created with employee information!")
}
