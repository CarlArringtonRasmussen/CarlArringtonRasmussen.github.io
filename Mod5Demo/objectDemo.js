// 1. Demo of Object Literals in JS

/*
    Structure of a JS Object Literal - also in JSON (JS Object Notation)
    {
        "key": value,
        "anotherKey": anotherValue
    }
*/

let instructor = {
    "name": "Dr. Arrington",
    "major": "Computer Science",
    "yearsTeaching": 7,
    "course": "Javascript"
};

console.log("Demo of a JS Object Literal");

console.log(instructor); // prints the entire object

console.log("--------------------------------------");
console.log("Display the values of keys in object:")
console.log(`Name: ${instructor.name}`); // also use instructor["name"]
console.log(`Major: ${instructor.major}`);
console.log(`Course: ${instructor.course}`);
console.log("--------------------------------------");

console.log("Updated object with function as a key:")

instructor = {
    "name": "Dr. Arrington",
    "major": "Computer Science",
    "yearsTeaching": 7,
    "course": "Javascript",
    "bio": function(){
        console.log(`${this.name} studied ${this.major} in college. ${this.name} has been teaching at Rasmussen for the past ${this.yearsTeaching} years. He currently teaches ${this.course}.`)
    }
};

instructor.bio(); // calls the instructor bio function
console.log("--------------------------------------");

// 2. Class Definitions

console.log("JavaScript objects using class definitions:");

class ins{
    constructor()
    {
        this.name = "Dr. Arrington";
        this.major = "Computer Science";
        this.yearsTeaching = 7;
        this.course = "JavaScript";
    }

    bio()
    {
      console.log(`${this.name} studied ${this.major} in college. ${this.name} has been teaching at Rasmussen for the past ${this.yearsTeaching} years. He currently teaches ${this.course}.`)
    }
};

// create instances (objects) from the class definition
let drArrington = new ins();
drArrington.bio();

console.log("--------------------------------------");
console.log("JavaScript objects using class definitions with constructor with arguments:");

class ins2 {
    constructor(name)
    {
      this.name = name;
      this.major = "Computer Science";
      this.yearsTeaching = 7;
      this.course = "JavaScript";
    }
  
    bio(otherCourse="Data Structures")
    {
      console.log(`${this.name} studied ${this.major} in college. ${this.name} has been teaching at Rasmussen for the past ${this.yearsTeaching} years. He currently teaches ${this.course} and ${otherCourse}.`)
    }
  }

let drA = new ins2("Dr. A");
//drA.bio();
drA.bio("C++");
console.log("--------------------------------------");
console.log("JavaScript objects using class definitions with constructor with arguments and accessor / mutators:")

class ins3 {
    constructor(name, major, yearsTeaching, course)
    {
      this.name = name
      this.major = major
      this.yearsTeaching = yearsTeaching
      this.course = course
    }
  
    getName()
    {
      return this.name
    }
  
    getMajor()
    {
      return this.major
    }
  
    getYearsTeaching()
    {
      return this.yearsTeaching
    }
  
    getCourse()
    {
      return this.course
    }
  
    setName(name)
    {
      this.name=name
    }
  
    setMajor(major)
    {
      this.major=major
    }
  
    setYearsTeaching(yearsTeaching)
    {
      this.yearsTeaching=yearsTeaching
    }
  
    setCourse(course)
    {
      this.course = course
    }
  
    bio(otherCourse="Data Structures")
    {
      console.log(`${this.getName()} studied ${this.getMajor()} in college. ${this.getName()} has been teaching at Rasmussen for the past ${this.getYearsTeaching()} years. He currently teaches ${this.getCourse()} and ${otherCourse}.`)
    }
};

let mrJones = new ins3("", "", 0, "");
mrJones.bio("");

mrJones.setName("Mr. Jones");
mrJones.setMajor("Chemistry");
mrJones.setYearsTeaching(3);
mrJones.setCourse("Organic Chemistry");
mrJones.bio("General Chemistry");