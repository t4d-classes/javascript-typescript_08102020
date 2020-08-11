'use strict';

const person = {
  // shorthand function property
  // getFullName: function() {
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const p1 = Object.create(person);
p1.firstName = 'Bob';
p1.lastName = 'Smith';

// const p2 = Object.create(person);
// p2.firstName = 'Sally';
// p2.lastName = 'Smith';

// console.log(p1.getFullName());
// console.log(p2.getFullName());
// console.log(p1.getFullName === p2.getFullName);

console.dir(p1);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const p3 = new Person('Bob','Smith');

console.dir(p3);
