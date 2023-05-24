class MathUtils {
    static PI: number = 3.14159;
  
    static calculateArea(radius: number): number {
      return MathUtils.PI * radius * radius;
    }
  }
  
  console.log(MathUtils.PI); // Accessing static property directly from the class
  console.log(MathUtils.calculateArea(5)); // Calling static method directly from the class
  