# Composition

**Day 5 · Phase 1 — OOP**

## Idea

**Composition** = an object **has** / **uses** another object (collaborator), instead of **being** a subtype of it.

| | Inheritance | Composition |
|---|-------------|-------------|
| Relationship | **is-a** | **has-a** |
| Coupling | Tight to parent | Looser — swap the part |
| Reuse | via `extends` | via a field + delegation |

```typescript
class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine; // has-a

  constructor(engine: Engine) {
    this.engine = engine;
  }

  start(): void {
    this.engine.start(); // delegate
  }
}
```

You already used this idea: `Checkout` **has** a `PaymentMethod`; `PrintArea` **has** a `Shape`.

## Association vs aggregation vs composition

All three are about objects **related to** each other (not `extends`).  
Confusion usually comes from textbooks splitting “has-a” into three labels. Use this ladder:

```text
Association     →  “knows / uses”          (weakest)
Aggregation     →  “has-a, parts can live alone”
Composition     →  “has-a, whole owns the parts”  (strongest)
```

### 1. Association — knows / uses

Two objects are linked somehow. Ownership is not the point.

- Teacher ↔ Student (teacher teaches student)
- `Order` uses `PaymentGateway` to charge

In code: a field, a method parameter, or a return type that refers to another type.

```typescript
class Teacher {
  teach(student: Student): void { /* ... */ } // association
}
```

### 2. Aggregation — has-a, but the part can exist alone

Whole has parts, but destroying the whole does **not** mean the parts must die. Parts are shared or independent.

- Department has Professors (professors still exist if department is closed)
- Playlist has Songs (same song can be in many playlists)

Often drawn with an empty diamond in UML.

```typescript
class Department {
  private professors: Professor[]; // aggregation — professors live outside too
  constructor(professors: Professor[]) {
    this.professors = professors;
  }
}
```

### 3. Composition — has-a, and the whole owns the part

Part is tightly owned. If the whole is destroyed, the part typically goes with it. Part usually isn’t meaningfully shared.

- House has Rooms (rooms don’t make sense without that house)
- Computer has its Disk/Cpu instance created for that computer

Often drawn with a filled diamond in UML.

```typescript
class House {
  private rooms: Room[];

  constructor() {
    // composition — House creates/owns rooms
    this.rooms = [new Room("living"), new Room("kitchen")];
  }
}
```

### One decision question (use in interviews)

> “If I delete the parent object, should the child still make sense on its own?”

- **Yes** → aggregation (or plain association)  
- **No** → composition  

### What you should remember for LLD

In coding interviews people often say **“composition”** for any has-a + delegation (`Car` has `Engine`), even when a pedantic UML person would say aggregation.

That’s fine. Prefer:

> “I’m using composition/has-a here — `Computer` owns `Cpu`/`Memory`/`Disk` and delegates to them, rather than inheriting from them.”

Only distinguish aggregation vs composition if the interviewer asks about lifecycle/ownership.

## Interview lines

> "I choose composition for has-a so I can replace the collaborator without a deep inheritance tree."

> "I am choosing composition here because the relationship is ownership/use, not a subtype."

> "Computer is not a Cpu — it has Cpu, Memory, and Disk. Composition also lets us combine multiple parts; a class can’t extend all of them."

## Pitfalls / Interview notes

- Day 5 solution shape: `Computer` has private `Cpu`/`Memory`/`Disk`, constructor-injected, `boot()` delegates — no `extends`.
- Demo should actually call `boot()` / `run()` (constructing alone doesn’t show the design).
- In interviews, emphasize has-a + delegation; don’t get stuck labeling aggregation vs composition unless asked.
