import { Observer } from "./Observer";

export class SmsObserver implements Observer {
    onPriceChange(price: number): void {
        console.log(`SmsObserver: Price changed to ${price}`);
    }
}