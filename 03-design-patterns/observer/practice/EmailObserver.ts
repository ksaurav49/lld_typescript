import { Observer } from "./Observer";

export class EmailObserver implements Observer {
    onPriceChange(price: number): void {
        console.log(`EmailObserver: Price changed to ${price}`);
    }
}