import { Order } from "./Order";
import { OrderState } from "./OrderState";

export class ShippedState implements OrderState {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    pay(): void {
        throw new Error("Cannot pay for a shipped order");
    }

    ship(): void {
        throw new Error("Order is already shipped");
    }

    cancel(): void {
        throw new Error("Cannot cancel a shipped order");
    }
}