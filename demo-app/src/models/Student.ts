import { Person } from './Person';

export class Student extends Person {

  gradeLevel: number;

  constructor(firstName: string, lastName: string, gradeLevel: number) {
    super(firstName, lastName);
    this.gradeLevel = gradeLevel;

    // this.change = this.change.bind(this);
  }

  getRecordInfo(): string {
    return this.lastName + ', ' + this.firstName + ' - Grade: ' + String(this.gradeLevel);
  }

  // change() {

  // }

  change = () => {
    
  }

}