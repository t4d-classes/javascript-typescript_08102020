'use strict';

const parent = {
  name: 'parent',
  amt: 1000,
};

const child = Object.create(parent);
child.name = 'child';

console.log(child.amt);

parent.amt = 2000;

console.log(child.amt);

child.amt = 50;

console.log(child.amt);

delete child.amt;

console.log(child.amt);

console.dir(child);
