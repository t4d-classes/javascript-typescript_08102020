import { Person } from './Person';

export class Teacher extends Person {

  subject: string;

  // constructor parameters strongly-typed
  constructor(firstName: string, lastName: string, subject: string) {
    super(firstName, lastName);
    this.subject = subject;
  }

  // return value of the function
  getRecordInfo(): string {
    return this.firstName + ' ' + this.lastName + ', Subject: ' + this.subject;
  }

}