# Exercise — Order lifecycle (State)

**Day 13b · Topic:** State  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class Order {
  status: string = "created";

  pay(): void {
    if (this.status === "created") {
      this.status = "paid";
      console.log("paid");
    } else {
      throw new Error("cannot pay");
    }
  }

  ship(): void {
    if (this.status === "paid") {
      this.status = "shipped";
      console.log("shipped");
    } else {
      throw new Error("cannot ship");
    }
  }

  cancel(): void {
    if (this.status === "created" || this.status === "paid") {
      this.status = "cancelled";
      console.log("cancelled");
    } else {
      throw new Error("cannot cancel");
    }
  }
}
```

## Requirements

1. One sentence: what problem does State solve here?
2. Refactor with State:
   - `OrderState` interface (methods: `pay`, `ship`, `cancel` — or similar)
   - Concrete states: at least `Created`, `Paid`, `Shipped` (add `Cancelled` if you handle cancel)
   - `Order` context holds current state and **delegates** `pay`/`ship`/`cancel` to it
   - States call something like `order.setState(...)` to transition
3. **No** growing `if (status === ...)` inside `Order` methods
4. **Demo:**
   - Happy path: created → pay → ship
   - One invalid path: e.g. ship before pay (should throw or log error)
   - Optional: cancel from created or paid

Suggested shape:

```text
practice/
  OrderState.ts
  CreatedState.ts
  PaidState.ts
  ShippedState.ts
  CancelledState.ts   # optional
  Order.ts
  Demo.ts
```

Use `export` / `import`. Watch circular imports: state files import `Order` type; keep methods thin.

## Definition of done

- [ ] Transitions live in state classes
- [ ] Demo: happy path + one illegal transition
- [ ] One sentence: State vs Strategy

## After you finish

Say ready for review (Builder + State).
