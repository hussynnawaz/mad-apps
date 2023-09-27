class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(id, name, age, cgpa, enrolledSemester, admissionDate) {
        super(id, name, age);
        this.cgpa = cgpa;
        this.enrolledSemester = enrolledSemester;
        this.admissionDate = admissionDate;
    }
}

class Teacher extends Person {
    constructor(id, name, age, salary, designation, department, joiningDate) {
        super(id, name, age);
        this.salary = salary;
        this.designation = designation;
        this.department = department;
        this.joiningDate = joiningDate;
    }
}

const students = [
    new Student(1, "Hussain Ahmed", 22, 3.5, "FA19", "2019-09-02"),
    new Student(2, "Sanan Naeem", 23, 3.8, "FA19", "2019-09-02"),
    new Student(3, "Inaamullah Khan", 22, 3.2, "FA19", "2019-09-02")
];

const teachers = [
    new Teacher(4, "Dr. Kashif Bilal", 35, 150000, "Assistant Professor", "Computer Science", "2010-08-01"),
    new Teacher(5, "Dr. Osman Khalid", 40, 160000, "Professor", "Computer Science", "2015-01-01"),
    new Teacher(6, "Mr. Jawad Khan", 34, 140000, "Lecturer", "Software Engineering", "2019-08-01")
];

function searchPersonById(id) {
    const person = [...students, ...teachers].find(p => p.id === id);
    return person || null;
}

const personIdToSearch = 5;
const foundPerson = searchPersonById(personIdToSearch);
if (foundPerson) {
    console.log("Person found:", foundPerson);
} else {
    console.log("Person not found");
}
