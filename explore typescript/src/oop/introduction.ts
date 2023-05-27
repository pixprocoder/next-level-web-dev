class PersonClass {
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

  const personClassPersonClass = new PersonClass('john doe', 20)
  personClassPersonClass.sayHello()


//   Inheritance 
  class EmployeeId extends PersonClass {
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
    const personClassPersonClass: PersonClass = new EmployeeId("Jane Smith", 25, 1234);
    personClassPersonClass.sayHello();
  } 