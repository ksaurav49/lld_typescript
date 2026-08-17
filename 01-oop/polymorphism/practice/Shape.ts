abstract class Shape {
    name: string;
    abstract area(): number;

    constructor(name: string) {
        this.name = name;
    }
}