// import intern
const Intern = require('../lib/intern');

// create and test intern object
test('should create intern object', () => {
    const intern = new Intern('Anakin Skywalker', 7, 'futuresithlord@jmail.com', 'Coruscant');

    expect(intern.name).toEqual('Anakin Skywalker');
    expect(intern.id).toEqual(7);
    expect(intern.email).toEqual('futuresithlord@jmail.com');
});

// returns role from returnRole() function
test('should return intern role', () => {
    const intern = new Intern('Anakin Skywalker', 7, 'futuresithlord@jmail.com', 'Coruscant');

    expect(intern.returnRole()).toEqual('Intern');
});

// returns intern specific role item school from returnSchool() function
test('should return intern school name', () => {
    const intern = new Intern('Anakin Skywalker', 7, 'futuresithlord@jmail.com', 'Coruscant');

    expect(intern.returnSchool()).toEqual('Coruscant');
});