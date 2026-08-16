# Exercise — BankAccount

**Day 1 · Topic:** Classes & Objects  
**Your code goes in:** [`practice/BankAccount.ts`](./practice/BankAccount.ts)

## Requirements

Implement a `BankAccount` class in TypeScript:

1. **Fields**
   - `owner: string`
   - `balance: number` — start at `0` unless the constructor receives an initial amount

2. **Methods**
   - `deposit(amount: number): void` — reject non-positive amounts (throw or return; pick one and be consistent)
   - `withdraw(amount: number): void` — reject if amount is invalid **or** greater than balance
   - `getBalance(): number`

3. **Demo** — at the bottom of the same file (or a short block you can run), show: create → deposit → withdraw → print balance

## Constraints

- Plain TypeScript only
- No inheritance, interfaces, or design patterns yet
- Prefer clear naming over cleverness

## Definition of done

- [ ] `BankAccount.ts` exists under `practice/`
- [ ] Deposit / withdraw rules are enforced
- [ ] You can explain in one sentence: class vs object, and state vs behavior

## After you finish

Paste the code in chat (or say the file is ready) for review. Do not look for a `reference/` folder until after review.
