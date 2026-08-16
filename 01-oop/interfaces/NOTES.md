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

## Pitfalls / Interview notes

*(Filled after review.)*
