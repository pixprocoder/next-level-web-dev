"use strict";
function add(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return `the result is ${param1 + param2}`;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
function getUser(user) {
    if ('role' in user) {
        return `I am an admin user role is ${user.role}`;
    }
    else {
        return `I am normal user`;
    }
}
const normalUser1 = { name: 'mr. john' };
const adminUser1 = { name: 'mr. john,', role: 2 };
// console.log(getUser(adminUser1));
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class Dog extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }
    makeGhew() {
        console.log(`Ghew Ghew`);
    }
}
class Cat extends Animal {
    constructor(name, sound) {
        super(name, sound);
    }
    makeMeaw() {
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
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeGhew();
    }
    else if (isCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
const animal1 = new Dog('tony', 'dog'); // instance
const animal2 = new Cat('bilai bhai', 'Cat');
getAnimal(animal1);
getAnimal(animal2);
