// create base class employee that all others will extend
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // create functions that return pieces of data of that employee
    returnRole(){
        return 'Employee';
    }
    returnName(){
        return this.name;
    }
    returnId(){
        return this.id;
    }
    returnEmail(){
        return this.email;
    }
}

// export the class
module.exports = Employee;