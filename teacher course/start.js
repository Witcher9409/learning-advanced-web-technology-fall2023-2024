"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var teacher = new teacher_1.Teacher('Alamin');
var student1 = new student_1.Student('Sajid');
var student2 = new student_1.Student('Humayra');
var course = teacher.createCourse('Advance Web Technologies');
student1.enrollInCourse(course);
student2.enrollInCourse(course);
console.log(course.teacher);
console.log(course.name);
console.log(course.students);