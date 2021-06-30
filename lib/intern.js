// import employee
const Employee = require('./employee');

// extend employee to add intern specifics
class Intern extends Employee {
    // adds school for intern
    constructor(name, id, email, school){
        // same as super class employee + school
        super(name, id, email);
        this.school = school;
    }
    returnRole(){
        return 'Intern';
    }
    // add school function for employee
    returnSchool(){
        return this.school;
    }
}

// export intern
module.exports = Intern;