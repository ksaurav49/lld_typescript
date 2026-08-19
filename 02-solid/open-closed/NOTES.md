# Open/Closed Principle (OCP)

**Day 7 · Phase 2 — SOLID**

## Idea

**OCP:** Software entities should be **open for extension**, **closed for modification**.

- **Open for extension** — you can add new behavior.
- **Closed for modification** — you should not keep editing existing working code (especially big `if`/`switch` chains) every time a new case appears.

Typical smell: a calculator/service that grows a new `if (type === ...)` branch for every new variant.

## Bad example (spot the OCP smell)

```typescript
class DiscountCalculator {
  calculate(price: number, type: string): number {
    if (type === "percentage") {
      return price * 0.9; // 10% off
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

Every new discount type means **opening and changing** `DiscountCalculator`.

## Direction (not a full solution)

Prefer a **stable abstraction** (interface / abstract method) that each discount implements. The calculator (or caller) depends on that abstraction and stays unchanged when you add `BlackFridayDiscount`, `LoyaltyDiscount`, etc.

You already practiced the tool: **interfaces + polymorphism** (Days 3–4).

## Interview lines

> "This violates OCP because adding a new variant requires modifying the existing class."

> "I’d introduce an abstraction and add new behavior by adding a new class, not by editing a switch."

## Pitfalls / Interview notes

- OCP smell = growing `if`/`switch` on type strings; fix = abstraction + new classes.
- Calculator should depend on `Discount`, not on concrete discount classes (you did this).
- Optional polish: pass `price` into `calculate(price)` instead of storing amount in the constructor — one calculator, many prices.
- Exact numbers matter in specs (`−50` vs `−10`); behavior shape > magic numbers for interviews, but match the exercise when given.
- This design is the seed of the **Strategy** pattern (comes later) — same idea.
