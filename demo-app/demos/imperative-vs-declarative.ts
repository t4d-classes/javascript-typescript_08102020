
const nums = [1,2,3,4,5,6,7,8,9,10];

// const doubleNums: number[] = [];

// imperative - what and how
// for (let i=0; i < nums.length; i++) {
//   doubleNums.push(nums[i] * 2);
// }

// more declarative way - what, what is unclear
// for (const num of nums) {
//   doubleNums.push(num * 2);
// }


// very declarative way
// map - transform the items of one array into another array
const doubleNums = nums.map( (num): number => num * 2 );

console.log(nums);
console.log(doubleNums);


