# Factory Pattern

**Day 11 · Phase 3 — Design Patterns**

## Problem

Client code needs an object of a family (payment method, notification channel, vehicle type) but shouldn’t be littered with `new CardPayment()`, `new UpiPayment()`, and string/`if` logic everywhere.

Naive: every caller knows concrete classes and how to choose them.

## Pattern idea

**Factory** = a place that **creates** the right object and returns it as an **abstraction**. Callers ask for “what I need,” not “which class to `new`.”

```text
Client  ──asks──▶  PaymentFactory.create("upi")  ──returns──▶  PaymentStrategy
                                                              (UpiPayment instance)
```

Two common flavors (interviews usually mean the simple one first):

| Flavor | Idea |
|--------|------|
| **Simple / static factory** | One function/class with `create(type)` that switches and returns the interface |
| **Factory Method** | Subclasses override “which product to create” (rarer in Node LLD unless asked) |

For this course: focus on **simple factory** that returns a Strategy (or similar) interface.

## Connection to Strategy

- **Strategy** — how behavior is *used* (interchangeable algorithms)
- **Factory** — how the right strategy (or product) is *chosen and constructed*

They pair often: factory picks the strategy → context uses it.

## Tiny bad → direction

```typescript
function checkout(amount: number, method: string): void {
  if (method === "card") new CardPayment().pay(amount);
  else if (method === "upi") new UpiPayment().pay(amount);
  // creation + usage mixed; if/else duplicated in many call sites
}
```

Direction: `PaymentFactory.create(method): PaymentStrategy`, then `checkout.pay(amount)` with the returned strategy. Creation logic lives in **one** place.

## When to use

- Multiple related concrete types; callers shouldn’t know all of them
- Creation rules might get more complex (config, defaults)
- You want one place to change when adding a type (still may touch the factory — trade-off vs full OCP)

## When NOT to use

- Only one concrete class forever
- Creation is trivial and used once — `new` is fine
- Factory becomes a giant switch that grows forever with no abstraction benefit

## Interview lines

> "I'm using a factory so callers depend on PaymentStrategy, not on concrete payment classes."

> "Creation is centralized; usage stays in Checkout via Strategy."

> "Factory decides *which* object; Strategy defines *how* it behaves."

## Honest trade-off

A simple factory’s `switch`/`if` still changes when you add a type. That’s OK for interviews if you explain: *creation* is localized; *usage* (Checkout) stays closed. Pure OCP for creation needs registration/DI — advanced, optional.
