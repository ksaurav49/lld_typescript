class WalletPayment implements PaymentMethod {
    pay(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
        console.log(`Paying ${amount} with wallet`);
    }
}