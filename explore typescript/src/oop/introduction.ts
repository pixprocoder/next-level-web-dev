class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  const person = new Person('john doe', 20)
  person.sayHello()


//   Inheritance 
  class EmployeeId extends Person {
    employeeId: number;

    constructor(name: string,age:number, employeeId: number){
        super(name,age);
        this.employeeId = employeeId;
    }
    sayHello(): void {
        console.log(`new Employee name is ${this.name} and age is ${this.age} id is ${this.employeeId}`);
    }
  }

  const employee = new EmployeeId('kobir', 33, 2)
  employee.sayHello()


//   Polymorphism

  {
    const person: Person = new EmployeeId("Jane Smith", 25, 1234);
    person.sayHello();
  } 