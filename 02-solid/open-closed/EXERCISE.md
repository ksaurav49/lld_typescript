# Exercise — Refactor DiscountCalculator (OCP)

**Day 7 · Topic:** Open/Closed  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class DiscountCalculator {
  calculate(price: number, type: string): number {
    if (type === "percentage") {
      return price * 0.9;
    }
    if (type === "fixed") {
      return price - 50;
    }
    if (type === "none") {
      return price;
    }
    throw new Error("Unknown discount");
  }
}
```

## Requirements

1. Identify why this violates OCP (one sentence is enough for yourself).
2. Refactor so that **adding a new discount type does not require editing** the calculator (or a giant `if`/`switch`).
   - Introduce an abstraction for “how to discount a price” (interface is fine).
   - Implement at least: **percentage** (10% off), **fixed** (−50), **none** (unchanged).
   - Optionally add one more type (e.g. 20% off) **only by adding a new class**, not by changing existing discount classes.
3. A thin orchestrator is fine (e.g. `DiscountCalculator` that takes the abstraction and calls it) — or call the discount directly in the demo. Either works if OCP holds.
4. **Demo:** print discounted prices for at least two different discount types on the same base price (e.g. `1000`).

Suggested shape (names are yours to choose):

```text
practice/
  Discount.ts              # interface
  PercentageDiscount.ts
  FixedDiscount.ts
  NoDiscount.ts
  DiscountCalculator.ts    # optional thin wrapper + demo
```

## Definition of done

- [ ] No growing `if (type === ...)` for discount kinds
- [ ] New discount type = new class (extension), not editing old classes
- [ ] One sentence: what was the OCP violation in the original?

## After you finish

Say ready for review.
