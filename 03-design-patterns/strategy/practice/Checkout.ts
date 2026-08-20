import { PaymentStrategy } from "./PaymentStrategy";

export class Checkout {
    private paymentStrategy : PaymentStrategy;

    constructor(paymentstrategy: PaymentStrategy) {
        this.paymentStrategy = paymentstrategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}