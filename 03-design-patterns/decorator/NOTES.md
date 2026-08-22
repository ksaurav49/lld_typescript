# Decorator Pattern

**Day 14b · Phase 3 — Design Patterns**

## Problem

You have a base object and want to **stack optional extras** at runtime without subclass explosion:

```text
Coffee
MilkCoffee extends Coffee
MilkSugarCoffee extends Coffee
SugarCoffee extends Coffee
... combinatorial subclasses
```

## Pattern idea

**Decorator** = implements the **same interface** as the component, **wraps** another instance, and adds behavior before/after delegating.

```text
Coffee (interface)
  SimpleCoffee
  MilkDecorator  wraps Coffee  →  cost/description += milk
  SugarDecorator wraps Coffee  →  cost/description += sugar

MilkDecorator(SugarDecorator(SimpleCoffee))
```

## Mental model

> “Wrap the same type to add layers — like onion skins.”

## When to use

- Add responsibilities dynamically (logging, compression, toppings)
- Avoid subclass combinatorics
- Client still talks to one interface (`Coffee`)

## When NOT to use

- Fixing incompatible APIs (Adapter)
- Simple one-off extension — a subclass might be enough

## Interview lines

> "Decorator implements the same interface and wraps another instance to add behavior."

> "I can stack decorators at runtime without changing the base class."

## Decorator vs Adapter

| | **Decorator** | **Adapter** |
|--|---------------|-------------|
| Interface | Same as wrapped | Different from wrapped |
| Purpose | Add behavior | Translate API |
