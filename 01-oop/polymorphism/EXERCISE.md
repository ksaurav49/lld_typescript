# Exercise — Shapes (inheritance + polymorphism)

**Day 4 · Topics:** Inheritance + Polymorphism  
**Also read:** [`../inheritance/NOTES.md`](../inheritance/NOTES.md) · [`NOTES.md`](./NOTES.md)  
**Your code goes in:** [`practice/`](./practice/)

## Requirements

1. Create a base class `Shape` with:
   - `abstract area(): number` **or** a method that subclasses override (either style is fine)
   - optional: `name: string` via constructor

2. Implement:
   - `Rectangle` — `width`, `height` → area = width * height
   - `Circle` — `radius` → area = Math.PI * radius * radius

3. Create a function:
   - `printArea(shape: Shape): void` — logs the area (depends on `Shape`, not Rectangle/Circle)

4. **Demo:** create one rectangle and one circle, call `printArea` on both.

Suggested files:

```text
practice/
  Shape.ts
  Rectangle.ts
  Circle.ts
  printArea.ts   # function + demo
```

## Constraints

- `printArea` must not use `if (shape is Circle)` style checks
- Keep the hierarchy shallow (one base + two children)

## Definition of done

- [ ] Base + 2 subclasses + polymorphic `printArea` demo
- [ ] You can explain polymorphism in one sentence using this example

## After you finish

Say the files are ready for review.
