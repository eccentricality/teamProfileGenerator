// import employee
const Employee = require('../lib/employee');

// create and test employee object
test('should create employee object and take argument as variables for name id and email', () => {
    const employee = new Employee('The Whills', 10, 'maytheforcebewithyou@jmail.com');

    expect(employee.name).toEqual('The Whills');
    expect(employee.id).toEqual(10);
    expect(employee.email).toEqual('maytheforcebewithyou@jmail.com');
});