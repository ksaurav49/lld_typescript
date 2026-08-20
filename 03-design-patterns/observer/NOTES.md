# Observer Pattern

**Day 12 · Phase 3 — Design Patterns**

## Problem

Something important happens (stock price changes, order ships, user signs up). **Many interested parties** want to react — email, SMS, analytics, UI — but the core object shouldn’t hardcode all of them:

```typescript
class Order {
  complete(): void {
    // ... mark complete
    sendEmail();
    sendSms();
    trackAnalytics(); // grows forever — OCP/SRP smell
  }
}
```

## Pattern idea

**Observer** = one **subject** (publisher) notifies a list of **observers** (subscribers) when its state changes.

```text
Subject (Order / Stock)
  subscribe(observer)
  unsubscribe(observer)
  notify()  →  calls observer.update(...) for each

Observer A (Email)     Observer B (SMS)     Observer C (Logger)
```

- Subject knows only the **Observer interface**, not concrete listeners
- Add/remove listeners without editing the subject’s core logic

## Mental model

> “When X changes, tell everyone who registered interest — without X knowing who they are.”

Same idea as: event emitters, webhooks, `addEventListener`, NestJS/RxJS streams (conceptually).

## Tiny bad → direction

```typescript
class Stock {
  setPrice(price: number): void {
    this.price = price;
    console.log("email trader");
    console.log("update UI"); // hardcoded dependents
  }
}
```

Direction: `Stock` holds `Observer[]`, on price change calls `notify()`. Email/UI implement `update(price)`.

## When to use

- One-to-many dependency: one event, many reactions
- Reactions change often; core domain should stay stable
- Loose coupling between publisher and subscribers

## When NOT to use

- Only one hardwired reaction forever — a direct call is fine
- You need a guaranteed complex pipeline/order with transactions — maybe explicit orchestration
- Notification loops (A notifies B notifies A) — careful design

## Interview lines

> "I'm using Observer so Order can notify listeners without depending on EmailService or SmsService directly."

> "Subscribers register via an interface; adding a new listener doesn't modify the subject."

> "This is publish-subscribe within a single process."

## Related

- **Strategy** — swap *how* one step works  
- **Observer** — notify *many* dependents about an event  
- **DI** — often inject the initial list of observers into the subject
