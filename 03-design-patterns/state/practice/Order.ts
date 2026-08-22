import { CreatedState } from "./CreatedState";
import { OrderState } from "./OrderState";

export class Order {
    private currentState: OrderState;

    constructor() {
        this.currentState = new CreatedState(this);
    }

    setState(state: OrderState): void {
        this.currentState = state;
    }

    pay(): void {
        this.currentState.pay();
    }

    ship(): void {
        this.currentState.ship();
    }

    cancel(): void {
        this.currentState.cancel();
    }
}