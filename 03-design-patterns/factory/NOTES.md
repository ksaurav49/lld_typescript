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

---

## Factory Method — plain English (read this if confused)

Forget the name for a moment. Think of a **restaurant**.

### Analogy

**Simple factory (what you built):**  
You walk up to a **single counter** and say `"upi"` / `"card"`. One person looks at the string and hands you the right payment object. That counter is `PaymentFactory`.

**Factory Method:**  
There is no string. There are **different restaurant branches**:
- UPI branch
- Card branch  

Each branch has the **same steps** (take order → charge → print receipt), but when it’s time to “make the payment object,” each branch **hardcodes its own** payment type inside itself.

You don’t say `"upi"`. You **go to the UPI branch**.

### Side by side with YOUR code

**Your simple factory:**

```typescript
// YOU pass the type as a string
factory.create("upi");   // factory decides with switch
factory.create("card");
```

Client knows a **type string**. One class contains all `new`s.

**Factory Method version of the same idea:**

```typescript
// YOU pick a different class — no string, no switch in one place
new UpiCheckoutFlow().run(100);   // this class always creates UpiPayment
new CardCheckoutFlow().run(100);  // this class always creates CardPayment
```

Client knows a **flow/creator class**. Each subclass contains **one** `new`.

### The only moving part

Both patterns answer: **who calls `new UpiPayment()`?**

| Pattern | Who calls `new`? |
|---------|------------------|
| Simple factory | `PaymentFactory` (one switch, many cases) |
| Factory Method | `UpiCheckoutFlow.createPayment()` (one subclass, one product) |

### Minimal code — watch only `createPayment`

```typescript
// Shared steps live here. Subclasses only answer: "which Payment?"
abstract class CheckoutFlow {
  run(amount: number): void {
    const payment = this.createPayment(); // ← THE factory method
    payment.pay(amount);
  }

  protected abstract createPayment(): Payment; // ← subclasses fill this in
}

class UpiCheckoutFlow extends CheckoutFlow {
  protected createPayment(): Payment {
    return new UpiPayment(); // always UPI — no "upi" string
  }
}

class CardCheckoutFlow extends CheckoutFlow {
  protected createPayment(): Payment {
    return new CardPayment(); // always card
  }
}
```

`run` never changes when you add Wallet. You add `WalletCheckoutFlow` with its own `createPayment`.

### Common confusion

| Myth | Reality |
|------|---------|
| “Factory Method = `create()` function” | Lots of things are named create. **Factory Method** specifically means: **subclass overrides create** |
| “I must use Factory Method for payments” | No. Your simple factory is the right default for `"upi"\|"card"` |
| “They’re the same” | Same goal (hide `new`). Different **decision style**: string switch vs subclass |

### When you’d actually use Factory Method

- Same pipeline (validate → create → notify) for Email vs SMS vs Push  
- Framework hook: “extend this class and override `createHandler()`”  

If the client already has a string from the UI (`method = "upi"`), **simple factory fits better**. Factory Method shines when the client naturally picks a **kind of flow**, not a type string.

### One sentence to remember

> **Simple factory:** tell one factory *what* you want (`"upi"`).  
> **Factory Method:** pick a subclass that already *knows* what to create.

## Pitfalls / Interview notes (from practice)

- Simple factory `create(type)` is the default for UI/config strings.
- Factory Method: `createPayment` only returns `new XPayment()` — payment *logic* stays in strategy classes.
- Prefer `protected abstract createPayment()`; remember imports on abstract base (`Checkout`) and concrete products.
