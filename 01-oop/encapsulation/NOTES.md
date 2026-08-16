# Encapsulation & Access Modifiers

**Day 2 · Phase 1 — OOP**

## Idea

**Encapsulation** = keep an object’s state hidden and allow change only through controlled methods, so invariants stay true.

Access modifiers in TypeScript:

| Modifier | Visible to |
|----------|------------|
| `public` (default) | Everywhere |
| `private` | Only this class |
| `protected` | This class + subclasses |

**Why it matters:** if `balance` is public, callers can break rules without calling `deposit`/`withdraw`.

## Tiny example

```typescript
class Counter {
  private value = 0;

  increment(): void {
    this.value += 1;
  }

  getValue(): number {
    return this.value;
  }
}

const c = new Counter();
c.increment();
// c.value = 99; // Error — private
console.log(c.getValue()); // 1
```

## Interview lines

> "I make fields private so invariants are enforced only through methods."

> "Public API is the methods; private fields are implementation details."

> "Celsius is private so callers cannot change it directly; they must use setters, which run validation first."

## Pitfalls / Interview notes

- Encapsulation goal: one private source of truth (`celsius`) + all writes go through validated setters.
- Duplicate validation in constructor/`setCelsius`/`setFahrenheit` — extract a `private assertValidCelsius(c: number)` so the rule lives in one place.
- Naming: `Celsius` not `Celcius`; keep API names consistent (`getCelsius` / `getFahrenheit` as methods, or real getters `get celsius()` — don’t mix styles casually).
- Error copy: if the check is `c < -273.15`, say “must not be below absolute zero (-273.15°C)”.
- After revision: private helper + consistent method API is interview-clean. Call methods with `()` — `getFahrenheit` without `()` logs the function, not the number.
