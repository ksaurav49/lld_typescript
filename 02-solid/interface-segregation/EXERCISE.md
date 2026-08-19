# Exercise — Split Worker interface (ISP)

**Day 8b · Topic:** Interface Segregation  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
}

class HumanWorker implements Worker {
  work(): void {
    console.log("coding");
  }
  eat(): void {
    console.log("lunch");
  }
  sleep(): void {
    console.log("zzz");
  }
}

class RobotWorker implements Worker {
  work(): void {
    console.log("welding");
  }
  eat(): void {
    throw new Error("not supported");
  }
  sleep(): void {
    throw new Error("not supported");
  }
}
```

## Requirements

1. Identify the ISP violation in one sentence.
2. Refactor so robots are **not** forced to implement eat/sleep.
   - Prefer small interfaces (or equivalent) that match real capabilities
   - Humans may implement more than one interface if that fits
3. **Demo:** call `work()` on both human and robot; call eat/sleep only where it makes sense (no throws for “not supported”).

Suggested shape (names yours):

```text
practice/
  // e.g. Workable.ts, Eatable.ts, Sleepable.ts, HumanWorker.ts, RobotWorker.ts, demo
```

## Definition of done

- [ ] No empty / throw stubs just to satisfy a fat interface
- [ ] Demo: both workers work; only humans eat/sleep
- [ ] One sentence: what was the ISP violation?

## After you finish

Say ready for review.
