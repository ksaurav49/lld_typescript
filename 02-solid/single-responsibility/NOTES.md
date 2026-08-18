# Single Responsibility Principle (SRP)

**Day 6 · Phase 2 — SOLID**

## Idea

**SRP:** A class should have **one reason to change** — one job / one responsibility.

Bad: one class that validates input, saves to DB, and sends email.  
Good: split into validator / repository / notifier (or similar).

## Bad example (spot the jobs)

```typescript
class UserService {
  createUser(email: string, password: string): void {
    if (!email.includes("@")) throw new Error("bad email");
    // pretend save to DB
    console.log(`INSERT user ${email}`);
    // pretend send email
    console.log(`Welcome email to ${email}`);
  }
}
```

This class changes if validation rules change, DB changes, *or* email copy changes — multiple reasons.

## Interview lines

> "This class has more than one reason to change, so it violates SRP."

> "I would split X and Y so each module has a single responsibility."

## Pitfalls / Interview notes

*(Filled after review.)*
