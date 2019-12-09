class Lesson {
  constructor(teacher, students) {
    if (teacher === "undefined") {
      throw new Error("[teacher] not found. ");
    }
    if (students === "undefined") {
      throw new Error("[students] not found. ");
    }
    this.teacher = teacher;
    this.students = students;
  }

  markOnTime(onTimeStudents) {
    // console.log(onTimeStudents);
    // Go to list of On Time Students
    onTimeStudents.forEach(student => {
      const name = student.studentName;
      this.students.forEach(register => {
        // console.log(register.name, name);
        if (register.studentName === name) {
          register.attendance = "on time";
        }
      });
    });
  }
  markLate(lateStudents) {
    // console.log(lateStudents);
    // Go to list of late Students
    lateStudents.forEach(student => {
      const name = student.studentName;
      this.students.forEach(register => {
        console.log(register.studentName, name);
        if (register.studentName === name) {
          register.attendance = "late";
        }
      });
    });
  }
  outputSummary() {
    console.log(`     ------------
    | Attendance |
      ------------`);
    this.students.forEach(student => {
      console.log(`${student.studentName} was ${student.attendance}`);
    });
  }
}

module.exports = Lesson;
