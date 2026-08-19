# Liskov Substitution Principle (LSP)

**Day 8 · Phase 2 — SOLID**

## Mental model (read this first)

Imagine a function that accepts type `T`:

```typescript
function doSomething(x: T) { /* uses x’s methods */ }
```

**LSP asks:** if I pass a subtype `S` instead of `T`, does `doSomething` still behave correctly — no crashes, no silent wrong results, no “surprise” rules?

If **yes** → substitution is safe.  
If **no** → LSP violation (even if TypeScript compiles).

> Inheritance / `implements` is a **type** claim.  
> LSP is a **behavior** claim: “I can stand in for my parent.”

## One sentence

**A subtype must keep every promise the parent type made to callers.**

Promises include:

| Promise | Broken when subtype… |
|---------|------------------------|
| Method exists and works | throws `"not supported"` |
| Returns a sensible result | returns nonsense / always `null` |
| Accepts what parent accepted | rejects inputs the parent allowed |
| Doesn’t add hidden requirements | needs extra setup callers don’t know about |

## The Bird example, step by step

```typescript
class Bird {
  fly(): void {
    console.log("flying");
  }
}
```

**Contract of `Bird`:** “If you have a `Bird`, calling `fly()` is OK.”

```typescript
function migrate(bird: Bird): void {
  bird.fly(); // writer only knows Bird — trusts fly() works
}
```

```typescript
class Penguin extends Bird {
  fly(): void {
    throw new Error("penguins can't fly");
  }
}
```

| Claim | True? |
|-------|--------|
| Penguin **extends** Bird (types) | Yes |
| Penguin can replace Bird in `migrate` (behavior) | **No** — `fly()` blows up |

That’s LSP: **looks like is-a in code, isn’t is-a in behavior.**

Penguins *are* birds in biology. In this design, “Bird” really meant “flying bird.” Bad model → LSP break.

## Tiny analogy

You hire someone for the role **Driver** (can drive a car).  
You hire a **Child** into that role. Type system might allow a bad hierarchy; reality: they can’t drive.

LSP = don’t put someone in a role whose contract they can’t fulfill.

## Smell checklist

- Override that **throws** or is empty because “this subtype can’t do that”
- Subtype that **weakens** what the parent guaranteed
- “is-a” inheritance chosen for sharing code, not for shared behavior

## Direction for the exercise (hint only)

If not every bird can fly, **don’t put `fly()` on a base type shared by all birds.**  
Put flying on something only flyers share. Then `migrate` takes that smaller type — penguins never enter that path.

## Interview lines

> "LSP: a subtype must be usable wherever the base type is expected without breaking the caller’s assumptions."

> "This hierarchy lies — the parent promises X, the child can’t do X."

> "I’d remodel so we don’t force a subtype to implement behavior it can’t honor."

## Related (don’t confuse)

| Principle | Question |
|-----------|----------|
| **OCP** | Can I *add* a new variant without editing old classes? |
| **LSP** | Can I *swap* a subtype in without surprising callers? |
| **ISP** | Am I forcing a class to implement methods it doesn’t need? |

Throwing `"not supported"` often violates **LSP and ISP** at once.

## Pitfalls / Interview notes (from practice)

- Prefer `interface Flyable { fly() }` over `class Flyable extends Bird` — capability ≠ taxonomy.
- Show `migrate(flyable: Flyable)` so the fix is visible at the **caller**, not only on subclasses.
- Demo both paths: sparrow in `migrate`, penguin as plain `Bird` eating — no crash.
