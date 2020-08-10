
type Person = {
  firstName: string,
  lastName: string,
  age: number,
};

// array literal syntax
const nums = [1,2,3,4,5, 'test', true, { id: 2}];

console.log(nums);
console.log(nums[0]);
console.log(nums.length);

nums.push(3);
// nums.push(BigInt(3));
nums.push('test 2');
nums.push(false);
nums.push({ id: '3' });
