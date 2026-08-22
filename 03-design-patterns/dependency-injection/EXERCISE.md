# Exercise — Inject notification sender

**Day 14c · Topic:** Dependency Injection  
**Your code goes in:** [`practice/`](./practice/)

Quick capstone — similar to Day 9 DIP, framed as the **DI pattern**.

## Starting point (bad)

```typescript
class EmailSender {
  send(to: string, message: string): void {
    console.log(`Email to ${to}: ${message}`);
  }
}

class AlertService {
  private sender = new EmailSender();

  alert(userId: string, text: string): void {
    this.sender.send(userId, text);
  }
}
```

## Requirements

1. `Notifier` interface: `send(to: string, message: string): void`
2. `EmailNotifier` and `SmsNotifier` implementations
3. `AlertService` receives `Notifier` via **constructor** — no `new EmailSender()` inside
4. **Demo:** same `AlertService` with email notifier, then with SMS notifier

Suggested shape:

```text
practice/
  Notifier.ts
  EmailNotifier.ts
  SmsNotifier.ts
  AlertService.ts
  Demo.ts
```

## Definition of done

- [ ] AlertService depends on `Notifier` abstraction
- [ ] Demo swaps implementations without editing AlertService
- [ ] One sentence: DI vs DIP

## After you finish

Say ready for review (Day 14 complete).
