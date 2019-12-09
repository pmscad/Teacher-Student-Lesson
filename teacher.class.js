class Teacher {
  constructor(subject, teacherName) {
    if (subject === "undefined") {
      throw new Error("[subject] not found. ");
    }
    if (teacherName === "undefined") {
      throw new Error("[teacherName] not found. ");
    }

    this.subject = subject;
    this.teacherName = teacherName;
  }
}

module.exports = Teacher;
