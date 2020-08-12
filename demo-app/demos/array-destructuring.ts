
const nums = [1,2,3,4,5];

const [ dfg, second, , fourth ] = nums; // array destructuring

console.log(dfg);
console.log(second);
console.log(fourth);

type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
};

const initialCars: Car[] = [];

type StateTuple<T> = Readonly<[ T, (newState: T) => T ]>;

const useState = <T>(initialData: T): StateTuple<T> => {

  const stateData = initialData;

  const stateUpdateFunction = (newState: T): T => newState;

  return [ stateData, stateUpdateFunction ];

}

const [ cars, setCars ] = useState<Car[]>([]);

// let stateInfo: Readonly<[ Car[], () => null ]>;
// let stateInfo: StateTuple<Car[]>;

// eslint-disable-next-line prefer-const
// stateInfo = useState(initialCars);

// console.log(stateInfo[0]);

