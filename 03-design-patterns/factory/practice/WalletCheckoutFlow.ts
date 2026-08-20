import { PaymentStrategy } from "../../strategy/practice/PaymentStrategy";
import { WalletPayment } from "../../strategy/practice/WalletPayment";
import { CheckoutFlow } from "./CheckoutFlow";

export class WalletCheckoutFlow extends CheckoutFlow {
    createPayment(): PaymentStrategy {
        return new WalletPayment();
    }
}