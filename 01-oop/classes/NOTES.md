# Classes & Objects

**Day 1 · Phase 1 — OOP**

## Idea

- A **class** is a blueprint (fields + methods).
- An **object** (instance) is a concrete value created with `new`.
- A **constructor** initializes an instance’s state.
- **Methods** are behavior that read or change that instance’s data.

**State** = data the object holds (`owner`, `balance`).  
**Behavior** = what the object can do (`deposit`, `withdraw`).

## Tiny example

```typescript
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hi, ${this.name}`;
  }
}

const u = new User("Saurav"); // one object / instance
u.greet();
```

`User` is the blueprint. `u` is one object with its own `name`.

## Interview lines

> "A class defines the shape and behavior; each object has its own copy of the instance state."

> "I put related state and the operations that protect that state on the same class."

> "In BankAccount, state is `owner` and `balance`; behavior is `deposit`, `withdraw`, and `getBalance`."

## Pitfalls / Interview notes

- Typo in class names (`BanckAccount`) looks careless in interviews — name the blueprint carefully.
- Methods that change money **must validate** (`amount > 0`, withdraw ≤ balance). Unchecked `+=` / `-=` is incomplete behavior.
- If fields are public (default in TS when you omit a modifier), outside code can do `account.balance = -999` and bypass your methods. That’s why Day 2 covers **access modifiers** (`private` / `public` / `protected`) and encapsulation.
- Prefer `getBalance()` (or a getter) as the safe way to *read* balance once it becomes `private`.
- Good pattern after revision: `private` fields + validating `deposit`/`withdraw` + public read via `getBalance()`.
- Optional hardening: also validate **initial** `balance` in the constructor (reject negatives). Same invariant, earlier gate.
- Be consistent with return types (`withdraw(): void` like `deposit`).
