# Exercise — Stock price observers

**Day 12 · Topic:** Observer  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class Stock {
  private price = 0;

  setPrice(price: number): void {
    this.price = price;
    console.log(`Email: price is now ${price}`);
    console.log(`SMS: price is now ${price}`);
    // next week: Slack, analytics, UI… — keep editing Stock
  }
}
```

## Requirements

1. One sentence: what problem does Observer solve here?
2. Refactor:
   - `Observer` interface (e.g. `update(price: number): void` — name yours)
   - At least **two** concrete observers (e.g. email notifier, SMS notifier)
   - `Stock` (subject): `subscribe` / `unsubscribe` (or `attach`/`detach`) + notify on price change
   - `Stock` must **not** import/call concrete Email/SMS classes — only the observer interface
3. **Demo:**
   - Subscribe both observers
   - Change price at least twice (both get notified)
   - Unsubscribe one, change price again (only the remaining one reacts)

Suggested shape:

```text
practice/
  Observer.ts
  EmailObserver.ts
  SmsObserver.ts
  Stock.ts
  Demo.ts
```

Use `export` / `import`.

## Definition of done

- [ ] Subject notifies via interface only
- [ ] Demo: subscribe → notify → unsubscribe → notify again
- [ ] One sentence: Observer vs hardcoding `sendEmail()` inside `Stock`

## After you finish

Say ready for review.
