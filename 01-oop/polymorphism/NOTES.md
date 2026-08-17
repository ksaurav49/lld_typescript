# Polymorphism

**Day 4 · Phase 1 — OOP**

## Idea

**Polymorphism** = same interface/call, different runtime behavior.

With inheritance or interfaces, you can write:

```typescript
function makeSound(animal: Animal): void {
  console.log(animal.speak());
}
```

Passing `Dog` or `Cat` changes what `speak()` does — the caller doesn’t switch on type.

That pairs with Day 3: depend on a base type / interface, vary the implementation.

## Interview lines

> "Polymorphism lets me call one method and get behavior based on the actual object type."

> "I avoid if/else on type flags when subclasses or interface implementations can override behavior."

> "I call shape.area() on a Shape reference; Rectangle and Circle override area(), so the runtime object decides which implementation runs."

## Pitfalls / Interview notes

- Depend on `Shape` in print/orchestration — call `area()`; don’t branch on Rectangle vs Circle.
- `abstract class` + `abstract area()` is a clean base when every subclass must provide the same capability with different math.
- A small `PrintArea` class or a `printArea(shape: Shape)` function both work — the key is the parameter/field type is `Shape`.
- Optional polish: `override area()` in subclasses; keep dimensions `private`.
