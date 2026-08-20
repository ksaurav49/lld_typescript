# State Pattern

**Day 13b · Phase 3 — Design Patterns**

## Problem

An object behaves differently based on **where it is in a lifecycle** — order status, document draft/published, vending machine idle/has-coin.

Naive:

```typescript
class Order {
  status = "created";

  pay(): void {
    if (this.status === "created") this.status = "paid";
    else throw new Error("can't pay");
  }
  ship(): void {
    if (this.status === "paid") this.status = "shipped";
    else throw new Error("can't ship");
  }
  // more methods × more statuses = tangled if/else
}
```

## Pattern idea

**State** = each status becomes a class implementing a shared interface. The context (`Order`) delegates actions to the **current state** object. States may transition the context to a new state.

```text
Order (context)
  current: OrderState
  pay() → current.pay(order)
  ship() → current.ship(order)

CreatedState.pay → set PaidState
PaidState.ship → set ShippedState
ShippedState.pay → throw / no-op
```

## Mental model

> “Replace status string + giant if/else with objects that each know what’s allowed.”

## State vs Strategy (don’t confuse)

| | **Strategy** | **State** |
|--|--------------|-----------|
| Intent | Swap algorithm | Change behavior with lifecycle |
| Who switches? | Usually client / config | Often **the state itself** transitions |
| Example | Payment method | Order created → paid → shipped |

Same *shape* (interface + classes); different *intent*.

## When to use

- Clear finite set of states and transitions
- Behavior differs a lot per state
- if/else on `status` is spreading across methods

## When NOT to use

- 2 simple statuses with tiny logic — an enum + a few guards is enough
- No real transitions — maybe Strategy instead

## Interview lines

> "I'm using State because allowed operations depend on the current lifecycle stage."

> "Each state class encapsulates transitions; Order just delegates."

> "Unlike Strategy, states often change themselves as events happen."
