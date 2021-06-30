// import employee
const Employee = require('./employee');

// extend employee to add manager specifics
class Manager extends Employee {
    // adds office number for manager
    constructor(name, id, email, officeNum){
        // same as super class employee + office number
        super(name, id, email);
        this.officeNum = officeNum;
    }
    returnRole(){
        return 'Manager';
    }
    // add office number function for manager
    returnOfficeNum(){
        return this.officeNum;
    }
    returnRoleInfo(){
        return `<li class="memberDetails">Office Num: ${this.returnOfficeNum()}</li>`
    }
}

// export manager
module.exports = Manager;