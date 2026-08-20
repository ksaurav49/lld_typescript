# Observer Pattern

**Day 12 · Phase 3 — Design Patterns**

## Plain English (start here)

You have one object whose state matters — e.g. a **stock price**.

When the price changes, **several other things** may want to react:
- send email
- send SMS
- log to console
- update a UI

**Bad design:** put all of those calls inside `Stock.setPrice`.  
Every new reaction means **opening and editing** `Stock` again.

**Observer design:**  
`Stock` only knows: “I have a list of listeners. When my price changes, I tell each listener.”  
Each listener decides **what** to do. `Stock` does not know email vs SMS.

> One publisher. Many subscribers. Publisher depends on an **interface**, not on concrete listeners.

---

## Roles (learn these three names)

| Role | Also called | Job |
|------|-------------|-----|
| **Subject** | Publisher / Observable | Holds state; keeps a list of observers; notifies them on change |
| **Observer** | Subscriber / Listener | Interface: “something happened, here’s the data” |
| **Concrete observer** | EmailObserver, SmsObserver | Implements the interface with real behavior |

```text
┌─────────────────────────────────────────┐
│  Stock  (Subject)                       │
│  - price                                │
│  - observers: Observer[]                │
│  + subscribe(o)                         │
│  + unsubscribe(o)                       │
│  + setPrice(p) → notify all observers   │
└─────────────────────────────────────────┘
                    │ notify
        ┌───────────┼───────────┐
        ▼           ▼           ▼
  EmailObserver  SmsObserver  (future Slack…)
  update(price)  update(price)
```

---

## What “notify” means (step by step)

1. Someone calls `stock.setPrice(150)`.
2. `Stock` saves `price = 150`.
3. `Stock` loops its list: for each observer, call `observer.update(150)`.
4. `EmailObserver.update` prints/sends email stuff.
5. `SmsObserver.update` prints/sends SMS stuff.

`Stock` never writes `new EmailObserver()` inside `setPrice`.  
Listeners are **registered from outside** (usually in Demo / app startup):

```typescript
stock.subscribe(emailObserver);
stock.subscribe(smsObserver);
stock.setPrice(150); // both get update(150)
```

---

## Why this is better (SOLID angle)

| Principle | How Observer helps |
|-----------|-------------------|
| **SRP** | `Stock` manages price + notification list. Email/SMS own their own sending. |
| **OCP** | Add SlackObserver by **adding a class** + `subscribe` — don’t edit `setPrice`’s body with more calls. |
| **DIP** | `Stock` depends on `Observer` interface, not `EmailObserver` / `SmsObserver`. |

Hardcoding `sendEmail()` + `sendSms()` inside `Stock` breaks **both SRP and OCP**.

---

## Tiny bad example

```typescript
class Stock {
  private price = 0;

  setPrice(price: number): void {
    this.price = price;
    console.log(`Email: price is now ${price}`);
    console.log(`SMS: price is now ${price}`);
    // next week: Slack, analytics… → edit this method again
  }
}
```

Problems:
- `Stock` knows about email and SMS channels
- List of reactions is **closed inside** the class
- Can’t easily turn SMS off without editing `Stock`

---

## Direction (shape only — you implement in practice/)

```text
Observer          → interface with update(price: number): void
EmailObserver     → implements Observer
SmsObserver       → implements Observer
Stock             → subject: subscribe, unsubscribe, setPrice → notify
Demo              → wire subscribe / setPrice / unsubscribe
```

Subject responsibilities:
- **subscribe** — add an observer to the list (if not already there)
- **unsubscribe** — remove from the list
- **notify** (private is fine) — call `update` on each observer with current price
- **setPrice** — change state, then notify

Observer responsibilities:
- **update** — react to the new price (console.log is enough for the exercise)

---

## Subscribe / unsubscribe (why the demo needs both)

Without unsubscribe, you only prove “notify works.”

With unsubscribe you prove the list is **dynamic**:

```text
subscribe email + sms
setPrice(100)     → both react
unsubscribe sms
setPrice(200)     → only email reacts
```

That’s the classic Observer interview demo.

---

## Real-world cousins (same idea)

| You may know | Observer idea |
|--------------|----------------|
| `button.addEventListener("click", fn)` | subject = button; observer = fn |
| Node `EventEmitter` | `on` / `emit` |
| Webhooks | system publishes event; many services subscribe |
| “Notify me when order ships” | order is subject; email/SMS are observers |

You don’t need a framework — a list + interface is enough for LLD interviews.

---

## Observer vs patterns you already know

| Pattern | Question it answers |
|---------|---------------------|
| **Strategy** | *How* should this one step run? (one algorithm slot) |
| **Factory** | *Which* object should I create? |
| **Observer** | *Who else* should react when something happens? (many listeners) |

Strategy: Checkout has **one** payment strategy.  
Observer: Stock has **many** observers.

---

## When to use

- One event, **many** independent reactions
- Reactions will grow or change (email today, Slack tomorrow)
- You want the domain object free of channel details

## When NOT to use

- Exactly one permanent reaction — a direct method call is simpler
- You need a strict transactional pipeline (validate → charge → ship) with clear order and rollback — prefer an explicit orchestrator/service
- Risk of cycles: A notifies B, B updates A, A notifies again — avoid or guard

---

## Interview lines

> "Stock is the subject. Listeners implement an Observer interface and register with subscribe."

> "On price change I notify all observers. Stock doesn't know about Email or SMS specifically."

> "Adding a new channel is a new observer class plus subscribe — I don't modify Stock's setPrice body."

> "This is in-process pub/sub."

---

## Common pitfalls

- Subject importing concrete `EmailObserver` — defeats DIP; wire in Demo instead
- Forgetting to notify after state change
- No unsubscribe — can’t show dynamic listeners
- Putting business workflow *into* observers that should stay in a service (observers should react, not own the whole use case)
- Notifying with stale/wrong data — pass the new price (or a small event object)

## Pitfalls / Interview notes (from practice)

- Keep observer **references** in Demo if you need `removeObserver` later (`new X()` inline loses the instance).
- Demo should prove unsubscribe: both notify → remove one → only remaining notifies.
- Prefer `!==` when filtering observers by reference.

---

## Optional stretch (only if time)

Pass a small event object instead of a bare number:

```typescript
interface PriceChanged {
  symbol: string;
  price: number;
}
```

Same pattern; richer data for observers. Not required for Day 12.
