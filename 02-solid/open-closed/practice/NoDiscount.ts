class NoDiscount implements Discount {
    applyDiscount(amount: number): number {
        return amount;
    }
}