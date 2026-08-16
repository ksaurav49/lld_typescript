// Implement BankAccount here (see ../EXERCISE.md)
class BankAccount {
    private owner: string = "";
    private balance: number = 0;

    constructor(owner: string, balance: number = 0) {
        if (owner === "") {
            throw new Error("Owner must be a non-empty string");
        }
        if (balance < 0) {
            throw new Error("Balance must be greater than 0");
        }
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const bankAccount = new BankAccount("saurav", 10000000000);
bankAccount.deposit(1000);
bankAccount.withdraw(500);
console.log(bankAccount.getBalance());