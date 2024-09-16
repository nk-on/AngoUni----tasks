class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    sayHello(){
        return `Hi my name is ${this.name}  I am ${this.age} years old`
    }
};
class Student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
}
const person = new Person("John doe",67);
const student = new Student("Jeff Doe", 19, 89);
console.log(person.sayHello());
console.log(student.age)