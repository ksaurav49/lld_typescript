import { PaymentStrategy } from "./PaymentStrategy";

export class UpiPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying amount ${amount} using UPI`);
    }
}