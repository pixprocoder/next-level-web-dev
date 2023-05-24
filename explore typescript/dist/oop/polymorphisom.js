"use strict";
class Person1 {
    takeNap() {
        console.log(`6 hours per day`);
    }
}
class Student extends Person1 {
    takeNap() {
        console.log(`10 hours per day`);
    }
}
class Developer extends Person1 {
    takeNap() {
        console.log(`5 hours per day`);
    }
}
function getNap(params) {
    params.takeNap();
}
const p1 = new Person1();
const p2 = new Student();
const p3 = new Developer();
getNap(p1);
getNap(p2);
getNap(p3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaOfShapes(params) {
    console.log(params.getArea());
}
getAreaOfShapes(new Circle(10));
getAreaOfShapes(new Rectangle(10, 12));
