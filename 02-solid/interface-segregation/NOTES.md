# Interface Segregation Principle (ISP)

**Day 8 · Phase 2 — SOLID**

## Idea

**ISP:** Clients should not be forced to depend on methods they **don’t use**.

Prefer **small, focused interfaces** over one fat interface that every implementer must stub out.

Smell: classes with empty methods, `throw new Error("not supported")`, or unused params just to satisfy a big interface.

## Bad example (spot the fat interface)

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
    throw new Error("robots don't eat"); // forced by the fat interface
  }
  sleep(): void {
    throw new Error("robots don't sleep");
  }
}
```

`RobotWorker` is forced to “implement” `eat` / `sleep` even though those aren’t its job. Callers that only care about `work()` still drag the whole contract.

## Direction (not a full solution)

Split by **what clients need** (e.g. work capability vs eat/sleep). A class can implement **multiple** small interfaces if it truly needs them.

## Interview lines

> "This violates ISP because implementers are forced to depend on methods they don’t use."

> "I’d split the interface so each client depends only on the methods it needs."

## Related (don’t confuse)

- **SRP** — one *class* / reason to change  
- **ISP** — one *interface* shouldn’t dump unused methods on clients  
- **LSP** — if you leave stubs that throw, you often break both ISP *and* LSP

## Pitfalls / Interview notes (from practice)

- ISP applies to **clients** too: `runShift(worker: Workable)` must not require `Eatable`.
- `lunchBreak(robotWorker)` should be a **compile-time** error, not a runtime throw.
- Split interfaces by what callers actually need; humans `implements` multiple small interfaces.
