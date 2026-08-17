# Inheritance

**Day 4 · Phase 1 — OOP**

## Idea

**Inheritance** = a class reuses/extends another class (`extends`).

- Child gets parent members
- Child can **override** methods
- Use for a true **is-a** relationship (Dog is an Animal)
- Prefer **composition** when it’s a **has-a** relationship (Car has an Engine) — Day 5

```typescript
class Animal {
  speak(): string {
    return "...";
  }
}

class Dog extends Animal {
  override speak(): string {
    return "Woof";
  }
}
```

## Interview caution

> "I use inheritance only for a clear is-a relationship; otherwise I prefer composition or an interface."

Deep inheritance trees get brittle in interviews — keep hierarchies shallow.

## Next

Also read [`../polymorphism/NOTES.md`](../polymorphism/NOTES.md), then do the exercise under polymorphism.
