
// purely typescript
type Person = {
  firstName: string,
  lastName: string,
  age: number,
};

// purely typescript
type Car = {
  make: string,
  model: string,
  year: number,
};

// purely typescript
type Item = Person | Car;

// array literal syntax
const nums: number[] = [];

nums.push(2);
nums.push(4);

const people: Person[] = [];

people.push({ firstName: 'Bob', lastName: 'Smith', age: 23 });

const items: Item[] = [];

items.push({ firstName: 'Bob', lastName: 'Smith', age: 23 });
items.push({ make: 'Ford', model: 'Fusion Hybrid', year: 2020 });

console.dir(items);

