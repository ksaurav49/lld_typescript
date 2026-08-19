# Dependency Inversion Principle (DIP)

**Day 9 · Phase 2 — SOLID**

## Mental model

**DIP:** High-level code (business logic) should **not** depend on low-level details (MySQL, SMTP, file system). **Both** should depend on **abstractions** (interfaces).

```text
BAD:  OrderService ──depends on──▶ MySqlPaymentGateway
GOOD: OrderService ──depends on──▶ PaymentGateway (interface)
                                    ▲
                                    │ implements
                              MySqlPaymentGateway
```

The **direction of dependency** flips: details plug into abstractions, not the other way around.

## One sentence

> Depend on interfaces/abstractions, not concrete classes — especially in constructors.

## Bad example (spot the coupling)

```typescript
class MySqlUserRepository {
  save(email: string): void {
    console.log(`INSERT INTO users ... ${email}`);
  }
}

class UserService {
  private repo = new MySqlUserRepository(); // hardwired detail

  createUser(email: string): void {
    this.repo.save(email);
  }
}
```

Problems:

- `UserService` (high-level) is tied to MySQL (low-level)
- Can't swap to Postgres / in-memory for tests without editing `UserService`
- `new` inside the class = you **create** dependencies instead of **receiving** them

## Direction (not a full solution)

1. Extract `UserRepository` interface (abstraction)
2. `MySqlUserRepository implements UserRepository`
3. `UserService` constructor takes `UserRepository` — **inject**, don’t `new`
4. Demo: same service, different repo implementation

You already practiced injection on **Day 6 (SRP)**. DIP is the **why**: high-level modules stay stable when low-level details change.

## DIP vs DI (don’t confuse)

| Term | What it is |
|------|------------|
| **DIP** | Design principle — depend on abstractions |
| **DI** | Technique — pass dependencies in (constructor, etc.) |

Constructor injection is how you **apply** DIP in TypeScript. They often show up together in interviews.

## Interview lines

> "UserService depends on a concrete MySQL class — it should depend on IUserRepository."

> "I inject the abstraction so I can swap implementations without changing business logic."

> "High-level policy shouldn't know storage or transport details."

## Part B preview — mixed refactor

Real “bad” code often violates **multiple** SOLID principles at once. On this day you’ll:

1. **Name** each violation (SRP? OCP? DIP? …)
2. **Refactor** in small steps — don’t rewrite everything blindly

## Pitfalls / Interview notes

- DIP ≠ “use interfaces everywhere for one class.” Use when you have **variants** or **need to swap/test**.
- `new ConcreteThing()` inside a service = smell for DIP (and often SRP).
- Fixing DIP usually means: interface + constructor injection + thin orchestrator.
