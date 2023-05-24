type Alphanumeric = string | number

function add(param1: Alphanumeric, param2: Alphanumeric){
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return `the result is ${param1 + param2}`
    } else{
       return param1.toString() + param2.toString()
    }
}
// console.log(add(2,2));
// console.log(add('2','1'));

type NormalUserType ={
    name:string
}
type AdminUserType = {
    name: string;
    role: number
}

function getUser(user:NormalUserType | AdminUserType): string{
    if('role' in user){
        return `I am an admin user role is ${user.role}`
    }else{
        return `I am normal user`
    }
}

const normalUser1: NormalUserType = {name: 'mr. john'}
const adminUser1: AdminUserType = {name: 'mr. john,', role: 2}
// console.log(getUser(adminUser1));

class Animal{
    name: string;
    sound: string;
    constructor(name:string, sound: string){
        this.name = name;
        this.sound = sound
    }
    makeSound(){
        console.log(`I am making sound`)
    }
}

class Dog extends Animal{
    constructor(name: string,sound:string){
        super(name,sound)
    }
    makeGhew(){
        console.log(`Ghew Ghew`);
    }
}

class Cat extends Animal{
    constructor(name: string, sound:string){
        super(name,sound)
    }
    makeMeaw(){
        console.log('Meaw Meaw');
    }
}
// option 1
// function getAnimal(animal: Animal){
//     if(animal instanceof Dog){
//         animal.makeGhew()
//     }
//     else if( animal instanceof Cat){
//         animal.makeMeaw()
//     }
//     else{
//         animal.makeSound()
//     }
// }

// Option 2 
function isDog(animal: Animal): animal is Dog{
    return animal instanceof Dog
}
function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat
}

function getAnimal(animal: Animal){
    if(isDog(animal)){
        animal.makeGhew()
    }
    else if (isCat(animal)){
        animal.makeMeaw()
    }
    else{
        animal.makeSound()
    }

}

const animal1 = new Dog('tony', 'dog') // instance
const animal2 = new Cat('bilai bhai', 'Cat')
getAnimal(animal1)
getAnimal(animal2)


