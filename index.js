const Lesson = require("./lesson.class.js");
const Teacher = require("./teacher.class.js");
const Student = require("./student.class.js");

const teacher = new Teacher("Maths", "Billy");
const student1 = new Student("Bilaal");
const student2 = new Student("Nath");
const student3 = new Student("Tom");
const mathsLesson = new Lesson(teacher, [student1, student2, student3]);
console.log(mathsLesson);
mathsLesson.markOnTime([student1]);
mathsLesson.markLate([student2]);
console.log(mathsLesson);

mathsLesson.outputSummary();
// The Maths lesson was conducted by Billy.
// ------------
// | Attendance |
// ------------
// Bilaal was on time
// Nath was late
// Tom was absent
