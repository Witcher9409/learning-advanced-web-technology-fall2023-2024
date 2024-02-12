import { Teacher } from './teachers';
import { Student } from './students';


const teacher = new Teacher('zayed');
const st1 = new Student('pringles');
const st2 = new Student('safari');

const course = teacher.createCourse('Advance Web Technologies');

st1.enrollInCourse(course);
st2.enrollInCourse(course);

