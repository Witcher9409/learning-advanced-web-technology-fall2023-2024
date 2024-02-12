import { Teacher } from './teachers';
import { Student } from './students';

export class Course {
  name: string;
  teacher: Teacher;
  students: Student[] = [];
  constructor(name: string, teacher: Teacher) {
    this.name = name;
    this.teacher = teacher;
  }
  enrollStudent(student: Student) {
    this.students.push(student);
  }
}