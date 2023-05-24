"use strict";
class MathUtils {
    static calculateArea(radius) {
        return MathUtils.PI * radius * radius;
    }
}
MathUtils.PI = 3.14159;
console.log(MathUtils.PI); // Accessing static property directly from the class
console.log(MathUtils.calculateArea(5)); // Calling static method directly from the class
