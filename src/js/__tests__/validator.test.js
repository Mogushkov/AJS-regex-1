import Validator from '../Validator';

test('только латинские буквы', () => {
    const name = 'юзер';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('тире, подчеркивания и цифры', () => {
    const name = 'us-_123er';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('true');
  });

test('не более трех цифр подряд', () => {
    const name = 'us123er';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('true');
  });

test('не более трех цифр подряд 2', () => {
    const name = 'us12345er';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('не должно начинаться цифрами', () => {
    const name = '1user';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('не должно заканчиваться цифрами', () => {
    const name = 'user1';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('не должно начинаться с подчеркивания', () => {
    
    const name = '_user';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('не должно заканчиваться подчеркиванием', () => {
    
    const name = 'user_';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });
  
test('не должно начинаться с тире', () => {
    const name = '-user';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('не должно заканчиваться тире', () => {
    const name = 'user-';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('false');
  });

test('корректное имя пользователя', () => {
    const name = 'username';
    const validation = new Validator(name);
    const recieved = validation.validateUsername();
    expect(recieved).toBe('true');
  });