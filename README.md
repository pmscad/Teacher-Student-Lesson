# Week 10 Student Lesson Registere

You will be architecting a lesson planner which will allow you to define a lesson,
a teacher and allow you to record the attendance of students.

- 1 class per file (require inside of index.js)
- You cannot modify a class from within another class
  Teacher class - It will allow a subject and teacher's name to be passed into the constructor - It must throw an error if the subject isn't provided - It must throw an error if the teacher's name isn't provided
  Student class - It will allow a student name to be passed into the constructor - It must throw an error if the student's name isn't provided
  Lesson class - It will allow a teacher and a list of expected students to be passed into the constructor - It must throw an error if a teacher isn't provided - It must throw an error if expected students aren't provided - A markOnTime method accepts a list of students and marks the respective students on time - a markLate method accepts a list of students and marks the respective students late - Any other students which weren't "on time" or "late" will be considered "absent" - an outputSummary method will output the subject, teacher who conducted the lesson and
  the respective students' attendance

---

| MEGA BONUS |

---

- MEGA BONUS IF YOU WRITE TESTS (jest / write it manually yourself)
  The classes must be used as follows:
  const teacher = new Teacher('Maths', 'Billy');
  const student1 = new Student('Bilaal');
  const student2 = new Student('Nath');
  const student3 = new Student('Tom');
  const mathsLesson = new Lesson(teacher, [
  student1,
  student2,
  student3,
  ]);
  mathsLesson.markOnTime([
  student1,
  ]);
  mathsLesson.markLate([
  student2,
  ]);
  mathsLesson.outputSummary();
  // The Maths lesson was conducted by Billy.
  // ------------
  // | Attendance |
  // ------------
  // Bilaal was on time
  // Nath was late
  // Tom was absent
  Submission Criteria:
- You must submit the link to your repository containing the node code
- You're repository must have a readme which
  ..- describes what the code does
  ..- contains instructions on how to run and use your code.
