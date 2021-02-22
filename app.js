const { writeFile } = require("fs/promises");
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const inquirer = require ('inquirer')
const render = require('./lib/htmlRenderer')
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//start with empty array to hold employees

const employees = []

const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'   
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID verification number?'
    },
    {
        type: 'list',
        name: 'title',
        message: 'What is the title of the emplyee?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
    
]

function startQuestions () {
    inquirer.prompt(
        {
            type: 'list',
            name: 'continue',
            message: 'Do you want to add another employee?',
            choices: ['Yes', 'No']
        }
    ).then((response) => {
        if (response.continue === 'Yes') {
            selectEmployee()
        } else {
            createWebsite()
        }
    }).catch(error => {
        if (error) {
            console.log(error)
        }
    })
}

function selectEmployee() {
    inquirer.prompt(employeeInfo).then((response) => {
        if (response.title === 'Manager') {
            createManager(response)
        } else if (response.title === 'Engineer') {
            createEngineer(response)
        } else if (response.title === 'Intern') {
            createIntern(response)
        } else {
            console.log('error')
        }
    })
}

function createManager (managerInfo) {
    inquirer.prompt(
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employees office phone number?'
        }
    ).then(async(response) => {
        const {name, email, id} = managerInfo
        let newManager = await new Manager (name, email, id, response.officeNumber)
        employees.push(newManager)
        //run main init function
    }).catch(error => {
        if(error) {
            console.log(error)
        }
    })
}

//function for engineer prompts (github)...
function createEngineer(engineerInfo) {
    inquirer.prompt(
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?'
        }
    ).then(async(response) => {
        const {name, email, id} = engineerInfo
        let newEngineer = await new Engineer (name, email, id, response.gitHub)
        employees.push(newEngineer)
        //run main init function
    }).catch(error => {
        if(error) {
            console.log(error)
        }
    })
}

//function for intern prompts (school)...
function createIntern (internInfo) {
    inquirer.prompt(
        {
            type: 'input',
            name: 'schoolName',
            message: 'What school is the employee currently enrolled?'
        }
    ).then(async(response) => {
        const {name, email, id} = internInfo
        let newIntern = await new Intern (name, email, id, response.schoolName)
        employees.push(newIntern)
        //run main init function
    }).catch(error => {
        if(error) {
            console.log(error)
        }
    })
}

// begins the entire set of questions(prompts)
startQuestions();

//calls the function to create the html file by putting the employee array into render function
function createWebsite() {
    fs.writeFileSync(outputPath, render(employees), function(error) {
        if (error) {
            console.log('error')
        }
    })
    console.log("Website has been created with employee information!")
}
