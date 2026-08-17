class Circle extends Shape {
    private radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    override area(): number {
        return Math.PI * this.radius * this.radius;
    }
}