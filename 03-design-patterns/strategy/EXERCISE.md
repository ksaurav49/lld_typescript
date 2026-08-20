# Exercise — Checkout with Payment Strategy

**Day 10 · Topic:** Strategy  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class Checkout {
  pay(amount: number, method: string): void {
    if (method === "card") {
      console.log(`Charged ₹${amount} to card`);
    } else if (method === "upi") {
      console.log(`Paid ₹${amount} via UPI`);
    } else if (method === "wallet") {
      console.log(`Paid ₹${amount} from wallet`);
    } else {
      throw new Error("Unknown payment method");
    }
  }
}
```

## Requirements

1. One sentence: what problem does Strategy solve here?
2. Refactor with Strategy:
   - Interface for “how to pay” (e.g. `PaymentStrategy`)
   - At least **three** concrete strategies: card, UPI, wallet
   - `Checkout` (context) takes the strategy via constructor **or** method param — either is fine if it depends on the abstraction
3. **No** growing `if (method === ...)` for payment kinds inside `Checkout`
4. **Demo:** same amount paid with at least two different strategies (print is enough)
5. Bonus (optional): add one more strategy **only by adding a new file** — do not edit existing strategies or `Checkout`

Suggested shape:

```text
practice/
  PaymentStrategy.ts
  CardPayment.ts
  UpiPayment.ts
  WalletPayment.ts
  Checkout.ts
  Demo.ts
```

Use `export` / `import` (modules) so names don’t clash with other days.

## Definition of done

- [ ] Context + strategy interface + ≥3 concrete strategies
- [ ] Demo with ≥2 strategies
- [ ] One sentence: Strategy vs “just use if/else”

## After you finish

Say ready for review.
