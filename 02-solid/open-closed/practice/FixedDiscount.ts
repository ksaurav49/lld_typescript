class FixedDiscount implements Discount {
    applyDiscount(amount: number): number {
        return amount - 10;
    }
}