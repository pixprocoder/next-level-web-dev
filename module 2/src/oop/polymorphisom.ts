class Person1{
    takeNap():void{
        console.log(`6 hours per day`);
    }
}

class Student extends Person1{
    takeNap(): void {
        console.log(`10 hours per day`);
    }
}
class Developer extends Person1{
    takeNap(): void {
        console.log(`5 hours per day`);
    }
}

function getNap(params: Person1){
    params.takeNap()
}

const p1 = new Person1()
const p2 = new Student()
const p3 = new Developer()
getNap(p1)
getNap(p2)
getNap(p3)


class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape{
    radius: number;
    constructor(radius:number){
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height:number, width:number){
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width  
    }
}

function getAreaOfShapes(params: Shape){
    console.log(params.getArea());
}

getAreaOfShapes(new Circle(10))
getAreaOfShapes(new Rectangle(10,12))