// Implement PaymentMethod interface + Card/UPI + checkout (see ../EXERCISE.md)
class Checkout {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    checkout(amount: number): void {
        this.paymentMethod.pay(amount);
    }
}

const cardPayment = new CardPayment();
const upiPayment = new UpiPayment();
const walletPayment = new WalletPayment();
const checkout = new Checkout(cardPayment);
checkout.checkout(100);
const upiCheckout = new Checkout(upiPayment);
upiCheckout.checkout(100);
const walletCheckout = new Checkout(walletPayment);
walletCheckout.checkout(100);