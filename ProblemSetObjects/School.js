"use strict";
// School

// Create a school object. The school object uses the same kind of student
// object as the previous exercise. It has methods that use and update
// information about the student. Be sure to check out the previous exercise for
// the other arguments that might be needed by the school object. Implement the
// following methods for the school object:

// - addStudent: Adds a student by creating a new student and adding the student
//   to a collection of students. The method adds a constraint that the year can
//   only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
//   Returns a student object if year is valid otherwise it logs "Invalid Year".
// - enrollStudent: Enrolls a student in a course.
// - addGrade: Adds the grade of a student for a course.
// - getReportCard: Logs the grades of a student for all courses. If the course
//   has no grade, it uses "In progress" as the grade.
// - courseReport: Logs the grades of all students for a given course name. Only
//   student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the getReportCard
// and courseReport methods respectively.
function createStudent(name, year) {
  let studentObj = {
    name,
    year,
    courses: [],

    info() {
      console.log(this.name + ' is a ' + this.year + ' student');
    },

    addCourse(course) {
      this.courses.push(course)
    },

    listCourses() {
      this.courses.forEach(course => console.log(course));
      return this.courses;
    },

    addNote(code, note) {
      let idx;

      let courseCodes = this.courses.map(course => {
        return course.code;
      })

      idx = courseCodes.indexOf(code);
      if (this.courses[idx].note) {
        this.courses[idx].note += '; ' + note;
      } else {
        this.courses[idx].note = note;
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) console.log(course.name + ': ' + course.note);
      })
    },

    updateNote(code, note) {
      let idx;

      let courseCodes = this.courses.map(course => {
        return course.code;
      })

      idx = courseCodes.indexOf(code);

      this.courses[idx].note = note;
    }
  }

  return studentObj;
}

const school = {
  students: [],

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']
   
    if (VALID_YEARS.includes(year)) {
      this.students.push(createStudent(name, year));
    } else {
      console.log('Invalid Year.');
    }
  },

  enrollStudent(student, course) {
    let idx;

    let studentNames = this.students.map(student => student.name);
    idx = studentNames.indexOf(student);

    this.students[idx].addCourse(course);
  },

  addGrade(name, code, grade) {
    this.students.forEach(student => {
      if (student.name === name) {
        student.courses.forEach(course => {
          if (course.code === code) {
            course.grade = grade;
          }
        })
      }
    })
  },

  getReportCard() {
    this.students.forEach(student => {
      console.log(`Student: ${student.name}`);
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`Course: ${course.name}, Grade: ${course.grade}`)  ;           
        } else {
          console.log(`Course: ${course.name}, Status: In Progress`);
        }
      });
    })
  }
}

school.addStudent('Nick', '2nd');
school.enrollStudent('Nick', { name: 'Object-Oriented JavaScript', code: 225 });
school.enrollStudent('Nick', { name: 'Computational Thinking and Problem Solving', code: 216 });
school.addGrade('Nick', 225, 'A+');
school.addGrade('Nick', 216, 'A');
school.addStudent('AJ', '2nd');
school.enrollStudent('AJ', { name: 'Computational Thinking and Problem Solving', code: 216 });
school.getReportCard();