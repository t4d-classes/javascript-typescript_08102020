

type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
};

const car: Readonly<Car> = {
  id: 1,
  make: 'F',
  model: 'H',
  year: 1,
  color: 'r',
  price: 1,
};

// copy an object, set the new value of some
// of the props - immutable operation
const newCar: Readonly<Car> = {
  ...car, // object spread operator
  year: 2,
};

console.log(newCar);

// object rest operator
const { make, model, ...other } = car;

console.log(make, model);
console.log(other);

function doIt(...params: any[]): void {

  console.log(params);

}

doIt(...[1,2,3,4]);