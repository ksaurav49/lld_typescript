// Implement Shape hierarchy + printArea (see ../EXERCISE.md)
class PrintArea {
    private shape: Shape;

    constructor(shape: Shape) {
        this.shape = shape;
    }

    printArea(): void {
        console.log(`The area of the ${this.shape.name} is ${this.shape.area()}`);
    }
}

const rectangle = new Rectangle("rectangle", 10, 20);
const circle = new Circle("circle", 10);

const printArea = new PrintArea(rectangle);
printArea.printArea();

const printAreaCircle = new PrintArea(circle);
printAreaCircle.printArea();