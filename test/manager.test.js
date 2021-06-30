// import manager
const Manager = require('../lib/manager');

// create and test manager object
test('should create manager object', () => {
    const manager = new Manager('Yoda', 9, 'master.yoda@jmail.com', 222-333-4444);

    expect(manager.name).toEqual('Yoda');
    expect(manager.id).toEqual(9);
    expect(manager.email).toEqual('master.yoda@jmail.com');
});

// returns role from returnRole() function
test('should return manager role', () => {
    const manager = new Manager('Yoda', 9, 'master.yoda@jmail.com', 222-333-4444);

    expect(manager.returnRole()).toEqual('Manager');
});

// returns manager specific role item office number from returnOfficeNum() function
test('should return manager office number as a line item', () => {
    const manager = new Manager('Yoda', 9, 'master.yoda@jmail.com', 222-333-4444);

    expect(manager.returnOfficeNum()).toEqual(222-333-4444);
});