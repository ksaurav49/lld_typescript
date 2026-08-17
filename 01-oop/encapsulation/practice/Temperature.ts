// Implement Temperature here (see ../EXERCISE.md)
class Temperature {
    private celsius: number = 0;

    constructor(celsius: number) {
        this.assertValidCelsius(celsius);
        this.celsius = celsius;
    }

    getCelsius(): number {
        return this.celsius;
    }

    getFahrenheit(): number {
        return this.celsius * 9/5 +32;
    }

    setCelsius(celsius: number): void {
        this.assertValidCelsius(celsius);
        this.celsius = celsius;
    }

    setFahrenheit(fahrenheit: number): void {
        let celsius = (fahrenheit - 32) * 5/9;
        this.assertValidCelsius(celsius);
        this.celsius = celsius;
    }

    private assertValidCelsius(celsius: number): void {
        if (celsius < -273.15) {
            throw new Error("Temperature must be greater than -273.15");
        }

    }

}

const temperature = new Temperature(20);
temperature.setFahrenheit(68);
console.log(temperature.getCelsius());
console.log(temperature.getFahrenheit());