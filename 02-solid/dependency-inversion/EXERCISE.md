# Exercise — Dependency Inversion + mixed refactor

**Day 9 · Topic:** Dependency Inversion  
**Your code goes in:** [`practice/`](./practice/)

Two parts (~30 min each). Do **Part A** first.

---

## Part A — Inject `UserRepository` (DIP)

### Starting point (bad)

```typescript
class MySqlUserRepository {
  save(email: string): void {
    console.log(`MySQL: saved ${email}`);
  }
}

class UserService {
  private repo = new MySqlUserRepository();

  createUser(email: string): void {
    this.repo.save(email);
  }
}
```

### Requirements

1. One sentence: why does this violate DIP?
2. Introduce a `UserRepository` abstraction (interface is fine).
3. `MySqlUserRepository implements UserRepository`.
4. `UserService` receives the repo via **constructor** — no `new MySqlUserRepository()` inside the service.
5. Add a second implementation (e.g. `InMemoryUserRepository`) — swap without editing `UserService`.
6. **Demo:** `createUser` with both repo implementations.

Suggested files:

```text
practice/
  UserRepository.ts
  MySqlUserRepository.ts
  InMemoryUserRepository.ts
  UserService.ts
  Demo.partA.ts          # or one Demo.ts for both parts
```

---

## Part B — Mixed SOLID refactor

### Starting point (bad — multiple smells)

```typescript
class OrderReportService {
  generateAndSend(orderId: string, format: string): void {
    // fetch (hardwired “MySQL”)
    const rows = [`order:${orderId}`, "item:book", "item:pen"];
    console.log("MySQL: fetched order rows");

    // format (growing if/switch)
    let body = "";
    if (format === "json") {
      body = JSON.stringify(rows);
    } else if (format === "csv") {
      body = rows.join(",");
    } else {
      throw new Error("unknown format");
    }

    // send (hardwired email)
    console.log(`Email sent: ${body}`);
  }
}
```

### Requirements

1. **List** which SOLID principles are violated (at least 2 — name them before coding).
2. Refactor so:
   - High-level orchestration doesn’t `new` concrete fetch/format/send classes
   - Adding a new report format (e.g. `"xml"`) doesn’t require editing a giant `if` chain in the orchestrator (OCP)
   - Responsibilities are split sensibly (SRP)
3. Keep it small — interfaces + 2–3 implementations per concern is enough.
4. **Demo:** generate and send one order report in at least two formats (e.g. json + csv).

Suggested shape (names yours):

```text
practice/
  OrderDataFetcher.ts / MySqlOrderFetcher.ts
  ReportFormatter.ts  / JsonFormatter.ts / CsvFormatter.ts
  ReportSender.ts       / EmailReportSender.ts
  OrderReportService.ts
  Demo.partB.ts
```

---

## Definition of done

- [ ] Part A: `UserService` depends on abstraction; two repo impls demo’d
- [ ] Part B: named ≥2 SOLID violations; refactor uses injection + extension (not one god class)
- [ ] One sentence each: what was the DIP violation in Part A?

## After you finish

Say ready for review.
