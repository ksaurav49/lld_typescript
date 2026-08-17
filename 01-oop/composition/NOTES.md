# Composition

**Day 5 · Phase 1 — OOP**

## Idea

**Composition** = an object **has** / **uses** another object (collaborator), instead of **being** a subtype of it.

| | Inheritance | Composition |
|---|-------------|-------------|
| Relationship | **is-a** | **has-a** |
| Coupling | Tight to parent | Looser — swap the part |
| Reuse | via `extends` | via a field + delegation |

```typescript
class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine; // has-a

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start(); // delegate
  }
}
```

You already used this idea: `Checkout` **has** a `PaymentMethod`; `PrintArea` **has** a `Shape`.

## Association / aggregation (quick)

- **Association** — objects know each other (weakest wording)
- **Aggregation** — has-a, but the part can live independently
- **Composition** — has-a, and the whole typically owns the part’s lifecycle (stronger ownership)

In interviews, saying “has-a via composition/delegation” is usually enough; don’t over-stress aggregation vs composition unless asked.

## Interview lines

> "I choose composition for has-a so I can replace the collaborator without a deep inheritance tree."

> "I am choosing composition here because the relationship is ownership/use, not a subtype."

## Pitfalls / Interview notes

*(Filled after review.)*
