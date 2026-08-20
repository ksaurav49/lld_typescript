# Exercise — Stock price observers

**Day 12 · Topic:** Observer  
**Your code goes in:** [`practice/`](./practice/)

Read [`NOTES.md`](./NOTES.md) first (roles + notify flow).

---

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

**Spot for yourself:** Which SOLID principles does this break, and why?

---

## What you will build

```text
practice/
  Observer.ts          # interface — update(price)
  EmailObserver.ts     # concrete observer
  SmsObserver.ts       # concrete observer
  Stock.ts             # subject — subscribe / unsubscribe / setPrice
  Demo.ts              # wiring + proof of unsubscribe
```

Use `export` / `import`.

---

## Requirements

### 1. Observer interface

Something like: “when price changes, call me with the new price.”  
Method name is yours (`update`, `onPriceChange`, …).

### 2. At least two concrete observers

Examples: email notifier, SMS notifier.  
Each implements the interface and **logs** a clear message (no real SMTP needed).

### 3. Stock as subject

Must support:

| Method | Behavior |
|--------|----------|
| `subscribe(observer)` | Add to internal list |
| `unsubscribe(observer)` | Remove from list |
| `setPrice(price)` | Store price, then notify **all** current observers |

Rules:
- `Stock` stores `Observer[]` (or similar)
- On notify, call `update` (or your method) on each observer with the new price
- `Stock` must **not** import or mention `EmailObserver` / `SmsObserver` by name — only the interface

### 4. Demo (must match this story)

```text
1. Create Stock + EmailObserver + SmsObserver
2. Subscribe both
3. setPrice(...) at least once  → expect BOTH logs
4. setPrice(...) again          → expect BOTH logs again
5. Unsubscribe SMS
6. setPrice(...) again          → expect ONLY email log (no SMS)
```

---

## Definition of done

- [ ] Subject notifies via interface only
- [ ] Demo proves subscribe **and** unsubscribe
- [ ] One sentence: what problem Observer solved vs the bad `Stock`

## Hints (if stuck)

1. Who owns the list of listeners — Stock or Demo?
2. When exactly do you call notify — before or after updating `price`?
3. How do you remove the *same object instance* you subscribed? (identity / reference matters)

## After you finish

Say ready for review.
