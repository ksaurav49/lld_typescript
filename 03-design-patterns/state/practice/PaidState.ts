import { CancelledState } from "./CancelledState";
import { Order } from "./Order";
import { OrderState } from "./OrderState";
import { ShippedState } from "./ShippedState";

export class PaidState implements OrderState {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    pay(): void {
        throw new Error("Order is already paid");
    }

    ship(): void {
        this.order.setState(new ShippedState(this.order));
    }

    cancel(): void {
        this.order.setState(new CancelledState(this.order));
    }
}