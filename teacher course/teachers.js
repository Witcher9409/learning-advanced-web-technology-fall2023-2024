"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var course_1 = require("./course");
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.createCourse = function (name) {
        return new course_1.Course(name, this);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
