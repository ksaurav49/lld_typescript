# Strategy Pattern

**Day 10 · Phase 3 — Design Patterns**

## Problem

You have a fixed workflow (“checkout”, “calculate fare”, “sort list”), but **one step varies**: payment method, shipping cost rule, sort algorithm.

Naive fix: `if (type === "card") … else if (type === "upi") …` inside the workflow class. That grows forever and violates **OCP**.

## Pattern idea

**Strategy** = encapsulate each algorithm/variant behind a shared interface, then inject (or pass) the chosen strategy into the context that runs the fixed workflow.

```text
Context (Checkout)  ──uses──▶  PaymentStrategy (interface)
                                    ▲
                    ┌───────────────┼───────────────┐
              CardStrategy    UpiStrategy    WalletStrategy
```

- **Context** — stable steps; doesn’t know concrete strategies
- **Strategy interface** — the varying behavior
- **Concrete strategies** — one class per variant

## Connection to what you already know

| You practiced | Strategy name |
|---------------|---------------|
| Day 7 `Discount` + calculator | Strategy + Context |
| Day 9 `ReportFormatter` | Strategy (format step) |
| DIP + constructor injection | How strategies are usually wired |

Strategy is the **named pattern** for “swappable algorithms via an interface.” OCP/DIP are the principles; Strategy is the shape.

## Tiny bad → direction

```typescript
class Checkout {
  pay(amount: number, method: string): void {
    if (method === "card") console.log(`Card charged ${amount}`);
    else if (method === "upi") console.log(`UPI paid ${amount}`);
    else throw new Error("unknown");
  }
}
```

Direction: `PaymentStrategy { pay(amount) }`, concrete classes, `Checkout` depends on the interface.

## When to use

- Several ways to do the **same job**, chosen at runtime or by config
- You want to add a new way without editing the context
- Algorithms are independent and interchangeable

## When NOT to use

- Only one way forever — interface + one class is overkill
- Variants share almost no contract (different methods) — maybe wrong abstraction (ISP)
- You’re “pattern hunting” for a simple `if` with 2 stable cases

## Interview lines

> "I'm using Strategy because the algorithm varies independently of the workflow."

> "The context depends on a PaymentStrategy abstraction; new methods are new classes."

> "This is OCP applied to interchangeable algorithms."

## Related

- **Factory** (soon) — often *creates* which strategy to use
- **State** — similar shape, but strategies usually don’t change *themselves* as they run; state machines do

## Pitfalls / Interview notes (from practice)

- Context class must be `export`ed if Demo is a separate module — otherwise `Cannot find name 'Checkout'`.
- Demo must `import` every concrete type it `new`s (e.g. `CardPayment`).
- Strategy = how you *use* the algorithm; tomorrow’s Factory = how you *pick* which one to construct.
