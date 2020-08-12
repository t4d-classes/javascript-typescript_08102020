
type Person = {
  firstName: string;
  lastName: string;
}

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
};

const printFullName = ({ firstName: fn, lastName: ln, ...otherProps }: Person, p2: any): void => {
  console.log(fn + ' ' + ln);
}


// const lastName = person.lastName;

const { lastName } = person; // object destructuring

console.log(lastName);

// does not change the lastName variable
person.lastName = 'Thompkins';

console.log(lastName);

printFullName(person);
