import { PaymentStrategy } from "../../strategy/practice/PaymentStrategy";
import { CardPayment } from "../../strategy/practice/CardPayment";
import { UpiPayment } from "../../strategy/practice/UpiPayment";
import { WalletPayment } from "../../strategy/practice/WalletPayment";

export class PaymentFactory {
    create(paymentType: string): PaymentStrategy {
        switch (paymentType) {
            case "upi":
                return new UpiPayment();
            case "wallet":
                return new WalletPayment();
            case "card":
                return new CardPayment();
            default:
                throw new Error(`Invalid payment type: ${paymentType}`);
        }
    }
}
