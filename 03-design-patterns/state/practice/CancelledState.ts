import { Order } from "./Order";
import { OrderState } from "./OrderState";

export class CancelledState implements OrderState {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    pay(): void {
        throw new Error("Cannot pay for a cancelled order");
    }

    ship(): void {
        throw new Error("Cannot ship a cancelled order");
    }

    cancel(): void {
        throw new Error("Order is already cancelled");
    }
}