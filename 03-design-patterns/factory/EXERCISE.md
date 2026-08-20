# Exercise — PaymentFactory + Checkout

**Day 11 · Topic:** Factory  
**Your code goes in:** [`practice/`](./practice/)

You already have Strategy from Day 10. Today add a **factory** that creates the right payment strategy from a string (or enum).

## Starting point (bad)

```typescript
function runCheckout(amount: number, method: string): void {
  if (method === "card") {
    new CardPayment().pay(amount);
  } else if (method === "upi") {
    new UpiPayment().pay(amount);
  } else if (method === "wallet") {
    new WalletPayment().pay(amount);
  } else {
    throw new Error("Unknown method");
  }
}
```

Creation and payment choice are duplicated wherever checkout runs.

## Requirements

1. One sentence: what problem does the Factory solve vs Strategy alone?
2. Add `PaymentFactory` (or similar) with something like:
   - `create(method: string): PaymentStrategy`
   - Supports at least: `"card"`, `"upi"`, `"wallet"`
   - Throws (or otherwise fails clearly) on unknown method
3. Wire with Strategy:
   - Factory returns `PaymentStrategy`
   - `Checkout` still depends only on the strategy (reuse Day 10 shape — copy small files into this `practice/` or import-style duplicates; **keep this folder self-contained**)
4. **Demo:** create strategies via the factory (not `new CardPayment()` in Demo for the happy path) and run checkout for at least two methods

Suggested shape:

```text
practice/
  PaymentStrategy.ts
  CardPayment.ts
  UpiPayment.ts
  WalletPayment.ts
  PaymentFactory.ts
  Checkout.ts
  Demo.ts
```

Use `export` / `import`.

## Definition of done

- [ ] Factory centralizes `new` + method → type mapping
- [ ] Demo uses factory + Checkout; no scattered creation if/else in Demo
- [ ] One sentence: Factory vs Strategy

## After you finish

Say ready for review.
