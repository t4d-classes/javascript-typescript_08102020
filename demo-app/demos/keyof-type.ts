
interface IPerson {
  firstName: string;
  lastName: string;
  // [ x: string ]: any;
}

const p: IPerson = {
  firstName: 'Bob',
  lastName: 'Smith',
};

// tslint:disable-next-line: no-string-literal
// console.log(p['age']);

function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// const ageProp = 'age';

console.log(prop(p, 'firstName'));
console.log(prop(p, 'lastName'));
// console.log(prop(p, ageProp));