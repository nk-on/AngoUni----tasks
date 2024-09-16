class Shape{
    constructor(r){
        this.PI = 3.14;
        this.r = r;
    };
    calculateArea(){
        
    };
};
class Circle extends Shape{
    calculateArea(){
        return this.PI*(this.r**2);
    }
    
};
class Rect extends Shape{
    constructor(r,a){
        super(r);
        this.a = a;
    };
    calculateArea(){
        return this.r*this.a;
    }
}
const circle =  new Circle(5);
const rect = new Rect(8,6);
console.log(circle.calculateArea());
console.log(rect)
console.log(rect.calculateArea())
