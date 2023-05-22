/**
 * Primitive types
 * 1. String
 * 2. Number
 * 3. boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol
*/

// type User = {
//     name: string,
//     age: number
// }


// Interface usually use for object

interface IUser {
    name: string,
    age: number
}

// const userWithAlias: User = {
//     name: 'kabir',
//     age: 33
// }

const userWithInterface: IUser = {
  name: 'kabir2',
  age: 2
}


type addNumber = (num1: number, num2:number) => number
const addTwo: addNumber = (num1, num2) => num1 + num2
console.log(addTwo(2,3));



interface IAddUser  {
    (num1:number, num2:number) : number;
}