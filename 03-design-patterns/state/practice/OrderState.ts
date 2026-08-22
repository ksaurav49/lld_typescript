export interface OrderState {
    pay(): void;
    ship(): void;
    cancel(): void;
}