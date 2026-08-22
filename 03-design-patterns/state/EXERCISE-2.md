# Exercise 2 — Media player (State)

**Day 13b · Practice 2 · Topic:** State (reinforcement)  
**Your code goes in:** [`practice-2/`](./practice-2/)

You finished **Order** lifecycle. This is the same pattern in a **new domain** so you can do it without copying Order files.

---

## Starting point (bad)

```typescript
class MediaPlayer {
  private status: "stopped" | "playing" | "paused" = "stopped";
  private track = "Song A";

  play(): void {
    if (this.status === "stopped" || this.status === "paused") {
      this.status = "playing";
      console.log(`Playing ${this.track}`);
    } else {
      throw new Error("Already playing");
    }
  }

  pause(): void {
    if (this.status === "playing") {
      this.status = "paused";
      console.log(`Paused ${this.track}`);
    } else {
      throw new Error("Can only pause while playing");
    }
  }

  stop(): void {
    if (this.status === "playing" || this.status === "paused") {
      this.status = "stopped";
      console.log("Stopped");
    } else {
      throw new Error("Already stopped");
    }
  }
}
```

Same smell: `status` string + `if` in every method.

---

## State diagram (your rules)

```text
                    play()
         ┌──────────────────────────┐
         │                          │
         ▼                          │
    ┌─────────┐   play()      ┌──────────┐
    │ STOPPED │──────────────▶│ PLAYING  │
    └─────────┘               └────┬─────┘
         ▲                         │ pause()
         │                         ▼
         │ stop()              ┌──────────┐
         └─────────────────────│  PAUSED  │
              stop()           └────┬─────┘
                                    │
                                    play() → back to PLAYING
```

| Current state | `play()` | `pause()` | `stop()` |
|---------------|----------|-----------|----------|
| **Stopped** | → Playing | ❌ error | ❌ error (or no-op — pick one, document in Demo) |
| **Playing** | ❌ error | → Paused | → Stopped |
| **Paused** | → Playing | ❌ error | → Stopped |

---

## Requirements

1. **New folder only** — do not edit `practice/` (Order). Work in `practice-2/`.
2. Refactor with State:
   - `PlayerState` interface: `play()`, `pause()`, `stop()`
   - Concrete: `StoppedState`, `PlayingState`, `PausedState`
   - `MediaPlayer` context: holds `currentState`, `setState`, delegates actions
   - Start in **Stopped**
3. **No** `if (status === ...)` inside `MediaPlayer` methods.
4. Optional: store `trackName: string` on `MediaPlayer`; states log it when playing/pausing.
5. Use `export` / `import`. Same style as Order (state holds `player` in constructor, or pass `player` in each method — **pick one, stay consistent**).

Suggested shape:

```text
practice-2/
  PlayerState.ts
  StoppedState.ts
  PlayingState.ts
  PausedState.ts
  MediaPlayer.ts
  Demo.ts
```

---

## Demo (must include)

```text
1. New player (stopped)
2. play()           → Playing log
3. pause()          → Paused log
4. play() again     → Playing log
5. stop()           → Stopped log

6. New player
7. pause() while stopped  → should throw (wrap in try/catch in Demo)
```

---

## Definition of done

- [ ] Three state classes + interface + context
- [ ] Transitions match the table above
- [ ] Demo: full happy path + one illegal action
- [ ] One sentence: how is this the same pattern as Order?

## Hints (if stuck)

1. Copy the **structure** from Order, not the business rules — different transitions.
2. `PlayingState.play()` should throw — you’re already playing.
3. After `stop()`, you should be in `StoppedState` again.

## After you finish

Say **ready for review (practice 2)**.
