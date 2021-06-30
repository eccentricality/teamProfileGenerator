a// import employee
const Employee = require('./employee');

// extend employee to add engineer specifics
class Engineer extends Employee {
    // adds github for engineer
    constructor(name, id, email, github){
        // same as super class employee + github
        super(name, id, email);
        this.github = github;
    }
    returnRole(){
        return 'Engineer';
    }
    // add github function for engineer
    returnGithub(){
        return this.github;
    }
    returnRoleInfo(){
        return `<li>GitHub: <a href="https://github.com/${this.returnGithub()}>${this.returnGithub()}</a></li>`
    }
}

// export engineer
module.exports = Engineer;