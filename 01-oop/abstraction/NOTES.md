# Abstraction

**Day 3 · Phase 1 — OOP**

## Idea

**Abstraction** = expose *what* something does, hide *how* it does it.

You already did a form of this: callers use `deposit()` / `setCelsius()` without caring how balance or conversion is stored.

In TypeScript, common tools for abstraction:

- **`interface`** — contract of methods/properties a type must have (no implementation)
- **`abstract class`** — partial implementation + abstract methods subclasses must fill in

Prefer an **interface** when you only need a contract. Prefer an **abstract class** when several types share real code *and* must implement some hooks.

## Interview lines

> "Abstraction lets callers depend on a stable contract, not on concrete internals."

> "I choose an interface when I need a capability; I choose a concrete class when I need a specific implementation."

## Next

Read [`../interfaces/NOTES.md`](../interfaces/NOTES.md) and do the exercise there.
