# Exercise — Stripe payment adapter

**Day 14a · Topic:** Adapter  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class StripeLegacy {
  makePayment(cents: number, currency: string): void {
    console.log(`Stripe charged ${cents} ${currency}`);
  }
}

class CheckoutService {
  checkout(amountInRupees: number): void {
    const stripe = new StripeLegacy();
    // client forced to know legacy API + conversion
    stripe.makePayment(amountInRupees * 100, "INR");
  }
}
```

`CheckoutService` is coupled to Stripe’s method name and cent conversion.

## Requirements

1. One sentence: what problem does Adapter solve?
2. Define `PaymentProcessor` with `charge(amountInRupees: number): void`
3. `StripeAdapter implements PaymentProcessor`:
   - wraps `StripeLegacy` (inject via constructor)
   - converts rupees → cents and calls `makePayment`
4. `CheckoutService` depends only on `PaymentProcessor` (constructor injection)
5. **Demo:** checkout once via adapter; `CheckoutService` must not import/call `StripeLegacy` directly

Suggested shape:

```text
practice/
  PaymentProcessor.ts
  StripeLegacy.ts
  StripeAdapter.ts
  CheckoutService.ts
  Demo.ts
```

Use `export` / `import`.

## Definition of done

- [ ] Adapter translates API + units
- [ ] CheckoutService uses interface only
- [ ] One sentence: Adapter vs Decorator

## After you finish

Continue to Decorator (`../decorator/`) or say ready for review.
