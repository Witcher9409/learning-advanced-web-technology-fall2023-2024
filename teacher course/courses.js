"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(name, teacher) {
        this.students = [];
        this.name = name;
        this.teacher = teacher;
    }
    Course.prototype.enrollStudent = function (student) {
        this.students.push(student);
    };
    return Course;
}());
exports.Course = Course;
