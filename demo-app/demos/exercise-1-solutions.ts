type Student = {
  firstName: string,
  lastName: string,
};

type Teacher = {
  firstName: string,
  lastName: string,
};

const students: Student[] = [
  { firstName: 'Bob', lastName: 'Smith' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Sally', lastName: 'Smith' },
];

const teachers: Teacher[] = [
  { firstName: 'Bob', lastName: 'Thompkins' },
  { firstName: 'Jane', lastName: 'Thompkins' },
  { firstName: 'Sally', lastName: 'Thompkins' },
];

type ForEachActionFn<TranformItemType> = (item: TranformItemType) => TranformItemType;

function myForEach<ItemType>(actionFn: ForEachActionFn<ItemType>, items: ItemType[]): void {

  for (const item of items) {
    actionFn(item);
  }

}

myForEach( (student): Student => {
  console.log(student.lastName + ', ' + student.firstName);
  return student;
}, students);

myForEach( (teacher): Teacher => {
  console.log(teacher.firstName + ' ' + teacher.lastName);
  return teacher;
}, teachers);