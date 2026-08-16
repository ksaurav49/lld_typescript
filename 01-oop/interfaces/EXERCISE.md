# Exercise — Payment methods via interface

**Day 3 · Topics:** Abstraction + Interfaces  
**Also read:** [`../abstraction/NOTES.md`](../abstraction/NOTES.md)  
**Your code goes in:** [`practice/`](./practice/)

## Requirements

1. Create an interface `PaymentMethod` with:
   - `pay(amount: number): void`

2. Implement at least two classes:
   - `CardPayment` — logs something like `Paid {amount} via Card`
   - `UpiPayment` — logs something like `Paid {amount} via UPI`
   - Both must `implements PaymentMethod`
   - Reject `amount <= 0` inside each `pay` (or share a small private helper per class)

3. Create a function (or small class) `checkout(method: PaymentMethod, amount: number): void` that only depends on the **interface**, then calls `method.pay(amount)`.

4. **Demo** at the bottom: checkout once with Card, once with UPI.

Suggested files (or one file if you prefer):

```text
practice/
  PaymentMethod.ts   # interface
  CardPayment.ts
  UpiPayment.ts
  checkout.ts        # checkout + demo
```

## Constraints

- `checkout` must not import/know Card vs UPI specifically beyond what you pass in at the call site
- No design-pattern names required — just interface + implementations

## Definition of done

- [ ] Interface + 2 implementations + checkout demo
- [ ] You can explain why `checkout` takes `PaymentMethod` instead of `CardPayment`

## After you finish

Say the files are ready (or paste) for review.
