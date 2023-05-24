import methods from './utils/index' // default exports
import { greeting, sumTwo as add } from './module' // normal export

const res1 = methods.sumTwo(3,2)
const res2 = methods.multiply(2,2)
const res3 = methods.division(4,2)
const res4 = methods.subtract(3,2)
const res5 = methods.average(5,4)

const res6 = greeting('Kobir', 33)
console.log(res6);
const res7 = greeting('Rajbir', 23)
console.log(res7);

const res8 = add(3,4)
console.log(res8);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);