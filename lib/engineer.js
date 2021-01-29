//using Employee constructor to extend the class to Engineer role; difference is the github
// grab the Employee constructor:
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
    }
    // when we use this class it will return the role of Engineer

    makeRole () {
        return "Engineer"

    }

    makeGitHub () {
        return this.gitHub
    }
}

//make available to export for testing

module.exports = Engineer