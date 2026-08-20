import { Checkout } from "../../strategy/practice/Checkout";
import { PaymentStrategy } from "../../strategy/practice/PaymentStrategy";

export abstract class CheckoutFlow {
    run(amount: number): void {
        const payment = this.createPayment();
        new Checkout(payment).checkout(amount);
    }

    protected abstract createPayment(): PaymentStrategy;
}