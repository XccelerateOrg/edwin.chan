class Person {
    constructor(options){
        this.name=options.name;
        this.age=options.age;
    }
    info(){
        console.log(`The person is called ${this.name} and is ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(options){
        super(options);
        this.gpa=options.gpa;
        
    }
    info(){
        console.log(`The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa.toFixed(1)} in the university.`);
    }
}
const person = new Student( {age: 44, name: 'Tom',gpa: 4.0} );
person.info() // The person is called Tom and is 44 years old