import { CancelledState } from "./CancelledState";
import { Order } from "./Order";
import { OrderState } from "./OrderState";
import { PaidState } from "./PaidState";

export class CreatedState implements OrderState {
    private order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    pay(): void {
        this.order.setState(new PaidState(this.order));
    }

    ship(): void {
        throw new Error("Cannot ship an order in the created state");
    }

    cancel(): void {
        this.order.setState(new CancelledState(this.order));
    }
    
}