import { Checkout } from "./Checkout";
import { UpiPayment } from "./UpiPayment";
import { WalletPayment } from "./WalletPayment";

const upiPayment = new UpiPayment();
const walletPayment = new WalletPayment();
const cardPayment = new CardPayment();

const checkout = new Checkout(upiPayment);
checkout.checkout(100);

const checkout2 = new Checkout(walletPayment);
checkout2.checkout(100);

const checkout3 = new Checkout(cardPayment);
checkout3.checkout(100);