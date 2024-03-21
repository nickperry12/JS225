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

const school = function() {
  let students = [];
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']

  let school = {
    addStudent(name, year) {
      if (VALID_YEARS.includes(year)) {
        students.push(createStudent(name, year));
      } else {
        console.log('Invalid Year.');
      }
    },

    enrollStudent(student, course) {
      let idx;

      let studentNames = students.map(student => student.name);
      idx = studentNames.indexOf(student);

      students[idx].addCourse(course);
    },

    addGrade(name, code, grade) {
      students.forEach(student => {
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
      students.forEach(student => {
        console.log(`Student: ${student.name}`);
        student.courses.forEach(course => {
          if (course.grade) {
            console.log(`Course: ${course.name}, Grade: ${course.grade}`)  ;           
          } else {
            console.log(`Course: ${course.name}, Status: In Progress`);
          }
        });
      })
    },

    courseReport(courseName) {
      let studentsAndGrades = [];
      let scores = [];

      students.forEach(student => {
        let name = student.name;
        student.courses.forEach(course => {
          let grade = course.grade;
          
          if (course.name === courseName && course.grade) {
            studentsAndGrades.push(`${name}: ${grade}`);
            scores.push(grade);
          }
        })
      })

      let average = scores.reduce((accum, current) => accum + current) / scores.length;
    
      let output = `==${courseName}==\n` + 
                  `${studentsAndGrades.join('\n')}\n` +
                  '---\n' +
                  `Course Average: ${average}`;

      console.log(output);
    }
  };

  return school;
}();

school.addStudent('Nick', '2nd');
school.enrollStudent('Nick', { name: 'Object-Oriented JavaScript', code: 225 });
school.enrollStudent('Nick', { name: 'Computational Thinking and Problem Solving', code: 216 });
school.addGrade('Nick', 225, 96);
school.addGrade('Nick', 216, 97);
school.addStudent('AJ', '2nd');
school.enrollStudent('AJ', { name: 'Computational Thinking and Problem Solving', code: 216 });
school.enrollStudent('AJ', { name: 'Object-Oriented JavaScript', code: 216 });
school.addGrade('AJ', 216, 99);
school.getReportCard();
school.courseReport('Computational Thinking and Problem Solving');