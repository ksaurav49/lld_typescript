import { PaymentStrategy } from "./PaymentStrategy";

export class CardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} using card`);
    }
}