import { Order } from "./Order";

const order = new Order();
order.pay();
order.ship();

const badOrder = new Order();
try {
    badOrder.ship();
} catch (error) {
    console.error(error);
}
