import { PaymentStrategy } from "./PaymentStrategy";

export class WalletPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying amount ${amount} using wallet`);
    }
}