import { Observer } from "./Observer";

export class Stock {
    private price: number;
    private observers: Observer[] = [];

    constructor(price: number) {
        this.price = price;
    }

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(o => o != observer);
    }

    changePrice(price: number): void {
        this.price = price;
        this.observers.forEach(observer => observer.onPriceChange(price));
    }

}