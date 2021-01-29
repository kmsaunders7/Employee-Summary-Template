//using Employee constructor to extend the class to Manager role
// grab the Employee constructor:
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    // when we use this class it will return the role of Manager

    getRole () {
        return "Manager"

    }

    getOfficeNumber () {
        return this.officePhone
    }
}

//make available to export for testing

module.exports = Manager