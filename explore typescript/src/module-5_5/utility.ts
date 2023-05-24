// Pick
interface Person {
    name: string;
    email?: string;
    contactNo: number;
}

type Contact = Pick<Person, 'email' | 'contactNo' >

// Omit
type Name = Omit<Person, 'email'>

// Partial
// To make everything optional
type Optional = Partial<Person>

// Required
type must = Required<Person> 


// ReadOnly
const person: Readonly <Person> ={
    name: 'harry',
    email: 'harry@gmail.com',
    contactNo: 235
}
// person.name = 'k' / I cannot change this now.

// Record
type MyObj = Record<'a' | 'b' | 'c' | 'd', string>

const myObj: MyObj = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
}

