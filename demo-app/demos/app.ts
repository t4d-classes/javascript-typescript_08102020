// Old School Approach - Constructor Functions (ES5)
// function PersonOld(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// PersonOld.prototype.getFullName = function() {
//   return this.firstName + ' ' + this.lastName;
// }

// const pOld = new PersonOld('Bob', 'Smith');

// New School Approach - Classes (ES6/2015)
// class Person {

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }

// }

// const p = new Person('Bob', 'Smith');

// TypeScript School Approach  - Strongly-Typed Classes

import { IPerson } from './models/IPerson';
import { Student } from './models/Student';
import { Teacher } from './models/Teacher';
import { Person as NicePerson  } from './models/Person';

const nicePerson = NicePerson.create('Bob Smith');
console.log(nicePerson.fullName);

type Person = {
  firstName: string;
  lastName: string;
  getFullName: () => string;
};

const displayName = (person: IPerson): void => {
  console.log(person.getFullName());
};

const q: Person = {
  firstName: 'Timmy',
  lastName: 'Smith',
  getFullName(): string {
    return this.firstName + ' - ' + this.lastName;
  },
};
displayName(q);

const r: IPerson = {
  firstName: 'Timmy',
  lastName: 'Smith',
  getFullName(): string {
    return this.firstName + ' - ' + this.lastName;
  },
};
displayName(r);


const s = new Student('Bob', 'Smith', 4);
displayName(s);

const t: IPerson = new Teacher('Sally', 'Smith', 'Physics');
displayName(t);
