
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


// type NumberTransformFn = (num: number) => number;

// function myMap(transformFn: NumberTransformFn, items: number[]): number[] {

//   const transformedItems: number[] = [];

//   for (const item of items) {
//     transformedItems.push(transformFn(item));
//   }

//   return transformedItems;
// }

// const doubleNums = myMap( (num): number => num * 2, nums);

// console.log(nums);
// console.log(doubleNums);
// console.log(myMap( (num): number => num * 4, nums ))


type MapTransformFn<TranformItemType> = (item: TranformItemType) => TranformItemType;

function myMap<ItemType>(transformFn: MapTransformFn<ItemType>, items: ItemType[]): ItemType[] {

  const transformedItems: ItemType[] = [];

  for (const item of items) {
    transformedItems.push(transformFn(item));
  }

  return transformedItems;
}


const doubleNums = myMap( (num): number => num * 2, nums );
const appendMarks = myMap( (s): string => s + '!', ['a','b'] );


console.log(doubleNums);

console.log(appendMarks);

