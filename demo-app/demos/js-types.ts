
let a;
console.log(typeof a); // undefined

const b = 'test';
console.log(typeof b); // string

const c = 2;
console.log(typeof c); // number

const d = BigInt(Number.MAX_SAFE_INTEGER);
console.log(typeof d); // bigint

const e = true;
console.log(typeof e); // boolean

const f = (): void => { console.log('do something'); };
console.log(typeof f); // function, functions are objects

const g = { id: 1 };
console.log(typeof g); // object, includes all objects including arrays

const h = null
console.log(typeof h); // this is considered to be a bug in JavaScript, null is a primitive



