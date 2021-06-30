// import engineer
const Engineer = require('../lib/engineer');

// create and test engineer object
test('should create engineer object', () => {
    const engineer = new Engineer('Obi-Wan Kenobi', 8, 'master.kenobi@jmail.com', 'iHaveTheHighGround');

    expect(engineer.name).toEqual('Obi-Wan Kenobi');
    expect(engineer.id).toEqual(8);
    expect(engineer.email).toEqual('master.kenobi@jmail.com');
});

// returns role from returnRole() function
test('should return engineer role', () => {
    const engineer = new Engineer('Obi-Wan Kenobi', 8, 'master.kenobi@jmail.com', 'iHaveTheHighGround');

    expect(engineer.returnRole()).toEqual('Engineer');
});

// returns engineer specific role item github username from returnGithub() function
test('should return engineer github username', () => {
    const engineer = new Engineer('Obi-Wan Kenobi', 8, 'master.kenobi@jmail.com', 'iHaveTheHighGround');

    expect(engineer.returnGithub()).toEqual('iHaveTheHighGround');
});