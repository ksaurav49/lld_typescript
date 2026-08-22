# Dependency Injection (pattern)

**Day 14c · Phase 3 — Design Patterns**

## Problem

Classes create their own dependencies with `new` — hard to test and swap.

You practiced the **DIP principle** on Day 9. **DI as a pattern** is the **technique**: pass dependencies in instead of constructing them inside.

## Pattern idea

```typescript
// bad
class ReportService {
  private repo = new MySqlReportRepository();
}

// DI
class ReportService {
  constructor(private repo: ReportRepository) {}
}

// composition root (Demo / main)
const service = new ReportService(new MySqlReportRepository());
```

**Constructor injection** is the default in TypeScript LLD interviews.

## Mental model

> “Don’t build your tools inside the class — receive them.”

## DI vs DIP

| | **DIP** | **DI** |
|--|---------|--------|
| What | Principle — depend on abstractions | Technique — how you wire them |
| Says | Depend on interfaces | Pass deps via constructor |

Often used together.

## Interview lines

> "I inject ReportRepository so ReportService stays testable and storage-agnostic."

> "Composition root wires concrete implementations."

## When NOT to overuse

- Value objects / pure helpers with no variants
- Every trivial `new` doesn’t need an interface
