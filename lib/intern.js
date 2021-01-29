//using Employee constructor to extend the class to intern role with the difference of school name
// grab the main Employee constructor:
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.schoolName = schoolName
    }
    // when we use this class it will return the role of Intern

    makeRole () {
        return "Intern"

    }

    makeSchool () {
        return this.schoolName
    }
}

//make available to export for testing

module.exports = Intern