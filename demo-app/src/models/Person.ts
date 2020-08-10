import { IPerson } from './IPerson';

export class Person implements IPerson {

  static create(fullName: string): Person {
    // const fullNameParts = fullName.split(' ');
    // return new Person(fullNameParts[0], fullNameParts[1]);

    return new Person(...fullName.split(' ') as [ string, string ]);
  }

  private mFirstName: string;

  get firstName(): string {
    return this.mFirstName;
  }

  set firstName(value: string) {
    this.mFirstName = value;
  }

  // define the data members (data properties)
  public lastName: string;

  public get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  public set fullName(value: string) {
    const fullNameParts = value.split(' ');
    this.mFirstName = fullNameParts[0];
    this.lastName = fullNameParts[1];
  }

  // constructor parameters strongly-typed
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // return value of the function
  public getFullName(): string {
    return this.lastName + ', ' + this.firstName;
  }

}