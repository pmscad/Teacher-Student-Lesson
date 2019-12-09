class Student {
  constructor(studentName) {
    if (studentName === "undefined") {
      throw new Error("[studentName] not found. ");
    }
    this.studentName = studentName;
    this.attendance = "absent";
  }
}

module.exports = Student;
