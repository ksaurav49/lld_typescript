import { Checkout } from "../../strategy/practice/Checkout";
import { PaymentFactory } from "./PaymentFactory";
import { UpiCheckoutFlow } from "./UpiCheckoutFlow";
import { WalletCheckoutFlow } from "./WalletCheckoutFlow";

const paymentFactory = new PaymentFactory();
const paymentStrategy = paymentFactory.create("upi");
const checkout = new Checkout(paymentStrategy);
checkout.checkout(100);

const checkout2 = new Checkout(paymentFactory.create("card"));
checkout2.checkout(100);


const upiCheckoutFlow = new UpiCheckoutFlow();
upiCheckoutFlow.run(100);

const walletCheckoutFlow = new WalletCheckoutFlow();
walletCheckoutFlow.run(100);