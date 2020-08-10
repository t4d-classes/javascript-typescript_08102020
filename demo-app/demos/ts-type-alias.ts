
type Person = {
  firstName: string,
  lastName: string,
  age: number,
  middleName: string,
};

type Person2 = {
  firstName: string,
  lastName: string,
  age: number,
};

const p: Person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 32,
  middleName: 'William',
};

const p2: Person2 = p;

console.log(p2);

const middleNameProp = 'middleName';

console.log(p2[middleNameProp]);

