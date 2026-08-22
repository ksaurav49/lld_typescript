# State Pattern

**Day 13b · Phase 3 — Design Patterns**

## The clearest picture (read this twice)

Imagine an order is a **person standing in a room**.  
The room is the **state**.

```text
        ┌─────────────┐
        │   CREATED   │  ← order starts here
        └──────┬──────┘
               │ pay() succeeds
               ▼
        ┌─────────────┐
        │    PAID     │
        └──────┬──────┘
               │ ship() succeeds
               ▼
        ┌─────────────┐
        │   SHIPPED   │  ← end
        └─────────────┘
```

**Rules of each room:**

| Room (state) | If you try `pay()` | If you try `ship()` |
|--------------|--------------------|---------------------|
| CREATED | OK → walk to PAID | ❌ error |
| PAID | ❌ error | OK → walk to SHIPPED |
| SHIPPED | ❌ error | ❌ error |

You always call the same thing on the order:

```text
order.pay()
order.ship()
```

But **which room you’re in** decides what happens.

That is the State pattern.

---

## Bad design (what you’re replacing)

One variable `status = "created"` and lots of if/else:

```typescript
pay() {
  if (status === "created") status = "paid";
  else throw ...
}
ship() {
  if (status === "paid") status = "shipped";
  else throw ...
}
```

**Problem:** every new status means editing every method. Hard to read.

---

## Good design (State) — same rules, different shape

### 1) Order = the person (does not know the rules)

```text
Order {
  currentRoom: some State object

  pay()  →  ask currentRoom.pay(me)
  ship() →  ask currentRoom.ship(me)
  goTo(newRoom) → currentRoom = newRoom
}
```

Order only says: “whatever room I’m in, handle `pay` / `ship`.”

### 2) Each room = one class

```text
CreatedState   = rules for CREATED room
PaidState      = rules for PAID room
ShippedState   = rules for SHIPPED room
```

### 3) Interface = “every room must answer pay and ship”

```text
OrderState {
  pay(order)
  ship(order)
}
```

---

## Exactly what happens (happy path)

```text
1. new Order()
      currentRoom = CreatedState

2. order.pay()
      Order calls:  CreatedState.pay(order)
      CreatedState: order.goTo(PaidState)     // walk to next room
                    console.log("paid")

3. order.ship()
      Order calls:  PaidState.ship(order)     // different class!
      PaidState:    order.goTo(ShippedState)
                    console.log("shipped")
```

## Illegal path

```text
1. new Order()          → CreatedState
2. order.ship()
      CreatedState.ship → throw "cannot ship yet"
      (stay in CREATED)
```

---

## Files = rooms + person

```text
Order.ts          → the person (delegates)
OrderState.ts     → “room must have pay + ship”
CreatedState.ts   → CREATED room rules
PaidState.ts      → PAID room rules
ShippedState.ts   → SHIPPED room rules
Demo.ts           → try happy path + illegal ship
```

---

## One line vs Strategy

| Pattern | Picture |
|---------|---------|
| **Strategy** | Pick a tool (Card/UPI). You choose the tool. |
| **State** | Walk through rooms. The **room** decides what you’re allowed to do next. |

---

## What YOU should type (skeleton only)

**OrderState.ts**

```typescript
pay(order: Order): void;
ship(order: Order): void;
```

**Order.ts** — only this idea:

```typescript
pay()  { this.state.pay(this); }
ship() { this.state.ship(this); }
setState(next) { this.state = next; }
// start: this.state = new CreatedState()
```

**CreatedState.ts** — only this idea:

```typescript
pay(order)  { order.setState(new PaidState()); console.log("paid"); }
ship(order) { throw new Error("cannot ship"); }
```

**PaidState.ts** — only this idea:

```typescript
pay(order)  { throw new Error("already paid"); }
ship(order) { order.setState(new ShippedState()); console.log("shipped"); }
```

Do **not** use a single `process()` method. Use `pay` and `ship`.

---

## Interview one-liner

> "Instead of if/else on a status string, each status is a class. Order delegates pay/ship to the current state class, and that class may move the order to the next state."
