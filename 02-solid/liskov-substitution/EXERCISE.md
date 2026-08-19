# Exercise — Fix Bird / Penguin (LSP)

**Day 8a · Topic:** Liskov Substitution  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class Bird {
  fly(): void {
    console.log("flying");
  }
}

class Penguin extends Bird {
  fly(): void {
    throw new Error("penguins can't fly");
  }
}

function migrate(bird: Bird): void {
  bird.fly();
}
```

## Requirements

1. Identify the LSP violation in one sentence (for yourself).
2. Refactor so that:
   - Code that needs flying only depends on types that **can** fly
   - A penguin (or other non-flying bird) does **not** pretend to implement `fly` by throwing / no-op
3. Keep it small: interfaces and/or composition are fine; deep inheritance is not required.
4. **Demo:**
   - Call a “migrate / fly” path with something that flies
   - Construct / use a penguin **without** crashing that path

Suggested shape (names yours):

```text
practice/
  // your types — e.g. Flyable, Bird, Penguin, Sparrow, demo
```

## Definition of done

- [ ] No subtype that breaks a parent’s promised behavior
- [ ] Demo shows flying path + non-flying bird coexisting safely
- [ ] One sentence: what was the LSP violation?

## After you finish

Say ready for review (or move to Interface Segregation if you’re confident).
