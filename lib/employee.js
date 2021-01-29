// Constructor function which can be used to create objects containing the properties, will further branch out from this
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name
    }

    getId () {
        return this.id
    }

    getEmail () {
        return this.email
    }

    getRole () {
        return this.role
    }
}

// Here, we export this module so that it can be imported for tests and to branch off the main constructor 

module.exports = Employee