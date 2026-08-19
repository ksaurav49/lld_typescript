class PercentageDiscount implements Discount {
    applyDiscount(amount: number): number {
        return amount * 0.9;
    }
}