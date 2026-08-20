# LLD — Start here

This file is the **single entry point** for every LLD session (this chat or a new chat).

## Mentor instruction (read first)

**Agent: before teaching, you MUST read the full mentor protocol here:**

`/Users/saurav/observability-local/lld/lld_base-instruction.md`

Day index: [`CURRICULUM.md`](./CURRICULUM.md)

---

## Next session

```text
Day: 11 / 30
Topic: Design Patterns — Factory
Path: 03-design-patterns/factory/
Status: Not started
Resume at: Read NOTES.md → EXERCISE.md → practice/
```

---

## Log

```text
Day 10
Topic: Design Patterns — Strategy
Path: 03-design-patterns/strategy/
Status: Completed
Confidence: 9/10
Weakness: initially forgot export Checkout + import in Demo; CardPayment import may still be missing
Notes: PaymentStrategy + Card/UPI/Wallet; Checkout injects strategy; demo swaps methods; Strategy = interchangeable algorithm behind interface

Day 9
Topic: SOLID — Dependency Inversion + mixed refactor
Path: 02-solid/dependency-inversion/
Status: Completed
Confidence: 8.5/10
Weakness: Part A missing second repo (InMemory) dual demo; Part B was mentor-assisted
Notes: Part A — UserRepository + ctor inject; Part B — fetcher/formatter/sender + OrderReportService; DIP = depend on abstractions

Day 8
Topic: SOLID — Liskov Substitution + Interface Segregation
Path: 02-solid/liskov-substitution/ · 02-solid/interface-segregation/
Status: Completed
Confidence: 8.5/10 (LSP) · 9/10 (ISP)
Weakness: LSP — Flyable as class first; demo omitted penguin path initially; ISP — client-side typed functions optional polish
Notes: LSP — fly off Bird base; Flyable interface; migrate(Flyable); ISP — Workable/Eatable/Sleepable split; RobotWorker only Workable

Day 7
Topic: SOLID — Open/Closed Principle
Path: 02-solid/open-closed/
Status: Completed
Confidence: 9/10
Weakness: minor — FixedDiscount used −10 vs exercise −50; amount stored in calculator ctor
Notes: Discount interface + Percentage/Fixed/No; inject into calculator; demo three types; OCP = don’t modify for new variants

Day 6
Topic: SOLID — Single Responsibility Principle
Path: 02-solid/single-responsibility/
Status: Completed
Confidence: 9/10
Weakness: initially hardwired new in ctor; briefly ignored boolean validation
Notes: Split validator/repo/email; inject via ctor params; orchestrate validate→save→email; SRP = multiple reasons to change

Day 5
Topic: Composition
Path: 01-oop/composition/
Status: Completed
Confidence: 8.5/10
Weakness: aggregation vs composition terminology (de-emphasized for interviews)
Notes: Computer has Cpu/Memory/Disk; boot load→compute→write; composition over multiple inheritance

Day 4 — Completed (polymorphism)
Day 3 — Completed (interfaces)
Day 2 — Completed (encapsulation)
Day 1 — Completed (classes)
```
