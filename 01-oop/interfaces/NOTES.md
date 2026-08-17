# Interfaces (and a note on abstract classes)

**Day 3 · Phase 1 — OOP**

## Idea

An **interface** names a capability. Any class that `implements` it must provide those members.

```typescript
interface Notifier {
  notify(message: string): void;
}

class EmailNotifier implements Notifier {
  notify(message: string): void {
    console.log(`Email: ${message}`);
  }
}

class SmsNotifier implements Notifier {
  notify(message: string): void {
    console.log(`SMS: ${message}`);
  }
}

function alertUser(notifier: Notifier): void {
  notifier.notify("Your OTP is 1234");
}
```

`alertUser` depends on `Notifier`, not on Email vs SMS — that’s abstraction via an interface.

**Abstract class (preview):** use when shared fields/methods exist *and* subclasses must implement something. Don’t force it into today’s exercise unless it fits.

## Interview lines

> "I'm using an interface because the behavior varies by implementation, but callers only need the common contract."

> "This lets us add a new implementation without changing code that depends on the interface."

> "Checkout depends on PaymentMethod so we can add new payment types without changing checkout’s core logic."

## Pitfalls / Interview notes

- Depend on `PaymentMethod` in checkout/orchestration — not on `CardPayment` / `UpiPayment` by name.
- Good shape: interface + multiple `implements` + caller passes the concrete instance at the edge.
- Validation duplicated in each `pay` is OK for Day 3; later you might share a helper or a small abstract base — don’t force it early.
- Multi-file TS: once you use `import`/`export`, export the interface and classes so `checkout.ts` can import them cleanly.
