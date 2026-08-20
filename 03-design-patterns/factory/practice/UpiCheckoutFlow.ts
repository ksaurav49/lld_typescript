import { PaymentStrategy } from "../../strategy/practice/PaymentStrategy";
import { UpiPayment } from "../../strategy/practice/UpiPayment";
import { CheckoutFlow } from "./CheckoutFlow";

export class UpiCheckoutFlow extends CheckoutFlow {
    createPayment(): PaymentStrategy {
        return new UpiPayment();
    }
}