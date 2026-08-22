# Adapter Pattern

**Day 14a · Phase 3 — Design Patterns**

## Problem

Your app expects one interface, but a **legacy / third-party** library speaks a different shape.

```typescript
// What your code wants
interface PaymentProcessor {
  charge(amount: number): void;
}

// What Stripe-like legacy gives you
class StripeLegacy {
  makePayment(cents: number, currency: string): void { ... }
}
```

You can’t change `StripeLegacy`. You need a **translator**.

## Pattern idea

**Adapter** = implements the interface your client expects, and **wraps** the incompatible class inside, translating calls.

```text
Your code  →  PaymentProcessor (interface)
                    ▲
                    │ implements
              StripeAdapter  ──wraps──▶  StripeLegacy
```

Adapter **does not** add new features (that’s Decorator). It **makes incompatible things fit**.

## Mental model

> “Same job, different method names / units — adapter translates.”

## Tiny example (direction only)

```typescript
class StripeAdapter implements PaymentProcessor {
  constructor(private stripe: StripeLegacy) {}

  charge(amount: number): void {
    this.stripe.makePayment(amount * 100, "INR"); // dollars → cents
  }
}
```

Client: `processor.charge(50)` — doesn’t know Stripe exists.

## When to use

- Integrate third-party / legacy code you can’t modify
- Interface mismatch (method names, return types, units)
- Wrap old module behind new abstraction

## When NOT to use

- You own both sides and can just fix the API
- You’re adding behavior on top (Decorator)
- You’re choosing which implementation to create (Factory)

## Interview lines

> "Adapter implements our interface and delegates to the legacy class with translated calls."

> "Client depends on PaymentProcessor, not StripeLegacy."

## Adapter vs Decorator

| | **Adapter** | **Decorator** |
|--|-------------|---------------|
| Goal | Make incompatible fit | Add behavior to same interface |
| Wraps | Different API | Same interface |
| Example | cents vs dollars | coffee + milk |
