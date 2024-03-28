// Classical Object Creation

// Implement the following diagram using the pseudo-classical approach.
// Subclasses should inherit all of the superclass's methods. Reuse the
// constructors of the superclass when implementing a subclass.

// Diagram link: 
// https://dbdwvr6p7sskw.cloudfront.net/js-exercises/object_creation_patterns/Classical.png

let Person = function (firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

let Doctor = function(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender)
  this.specialization = specialization;
}

Object.setPrototypeOf(Doctor.prototype, Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

let Professor = function(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender)
  this.subject = subject;
}

Object.setPrototypeOf(Professor.prototype, Person.prototype);

Professor.prototype.teach = function () {
  console.log('Teaching');
}

let Student = function(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender)
  this.degree = degree;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
}

let GraduateStudent = function(firstName, lastName, age, gender, graduateDegree) {
  Person.call(this, firstName, lastName, age, gender)
  this.graduateDegree = graduateDegree;
}

Object.setPrototypeOf(GraduateStudent.prototype, Student.prototype);

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'
console.log('');
const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'
console.log('');
const professor = new Professor('nick', 'perry', 34, 'male', 'Math');
console.log(professor instanceof Person);
console.log(professor instanceof Professor);
professor.eat();
professor.communicate();
professor.sleep();
console.log(professor.fullName());
professor.teach();
console.log('');
const student = new Student('nick', 'perry', 34, 'male', 'Math');
console.log(student instanceof Person);
console.log(student instanceof Student);
student.eat();
student.communicate();
student.sleep();
console.log(student.fullName());
student.study();
console.log('');
const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'