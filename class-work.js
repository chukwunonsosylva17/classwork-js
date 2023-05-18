class Human{ 
 constructor(height, age, sex, hairColor){
 this.height = height;
 this.age = age;
 this.sex = sex;
 this.hairColor = hairColor;
 }
} 
const human = new Human();
human.height = "178cm";
human.age = 38;
human.sex = "Male";
human.hairColor = "Black";
console.log(human, Human);


class Matrix { 
constructor (width, height, element = (x, y) => undefined){ 
    this.width = width;
    this.height = height;
    this.content = [];
     
    for (let y = 0; y < height; y++){ 
        for (let x = 0; x < width; x++){ 
            this.content[y * width + x] = element(x, y);
        }
    }
}
get(x, y) { 
    return this.content[y * this.width + x];
}
set(x, y, value){ 
    this.content[y * this.width + x];
}
}
const matrix = new Matrix;
console.log(matrix, Matrix);

  
class Temperature { 
    constructor(celsius) { 
        this.celsius = celsius;
    }
    get fahrenheit(){ 
return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) { 
        this.celsius = ((value - 32)/ 1.8);
    }
    static fromFahrenheit(value){ 
        return new Temperature((value - 32)/ 1.8);
    }
}
const temp = new Temperature(293);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);


class Shape {
    constructor(side1, side2) {
      this.side1 = side1;
      this.side2 = side2;
    }
  }
  
  class Circle extends Shape {
    constructor(side1) {
      super(side1);
    }
    areas = () => {
      console.log(this.side1);
      return this.side1 ** 2 * Math.PI;
    };
  }
  
  class Rectangle extends Shape {
    constructor(side1, side2) {
      super(side1, side2);
    }
    area() {
      return 2 * (this.side1 + this.side2);
    }
  }
  
  class Three extends Shape {
    constructor(side1, side2, side3) {
      super(side1, side2);
      this.side3 = side3;
    }
    area() {
      console.log(this.side1, this.side2, this.side3);
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  const circle1 = new Circle(2);
  const rectangle = new Rectangle(2, 3);
  const three = new Three(1, 2, 3);
  
  console.log(circle1.areas());
  console.log(rectangle.area());
  console.log(three.area());