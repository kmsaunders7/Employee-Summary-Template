//using Employee constructor to extend the class to Manager role
// grab the Employee constructor:
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        super(name, id, email)
        this.officePhone = officePhone
    }
    // when we use this class it will return the role of Manager

    makeRole () {
        return "Manager"

    }

    makePhone () {
        return this.officePhone
    }
}

//make available to export for testing

module.exports = Manager