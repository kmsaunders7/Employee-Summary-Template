// Constructor function which can be used to create objects containing the properties, will further branch out from this
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    makeName () {
        return this.name
    }

    makeId () {
        return this.id
    }

    makeEmail () {
        return this.email
    }

    makeRole () {
        return this.role
    }
}

// Here, we export this module so that it can be imported for tests and to branch off the main constructor 

module.exports = Employee