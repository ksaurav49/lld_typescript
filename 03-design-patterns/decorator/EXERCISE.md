# Exercise — Coffee decorators

**Day 14b · Topic:** Decorator  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class Coffee {
  getCost(): number {
    return 100;
  }
  getDescription(): string {
    return "Coffee";
  }
}

// want milk + sugar → tempted to subclass MilkSugarCoffee...
```

## Requirements

1. One sentence: what problem does Decorator solve?
2. `Beverage` interface (or `Coffee`): `getCost()`, `getDescription()`
3. `SimpleCoffee implements Beverage` — base cost 100
4. At least two decorators, e.g.:
   - `MilkDecorator` — +20, description "+ milk"
   - `SugarDecorator` — +10, description "+ sugar"
   - Each wraps a `Beverage` (constructor), delegates then adds
5. **Demo:** print cost + description for:
   - plain coffee
   - coffee with milk
   - coffee with milk + sugar (nested decorators)

Suggested shape:

```text
practice/
  Beverage.ts
  SimpleCoffee.ts
  MilkDecorator.ts
  SugarDecorator.ts
  Demo.ts
```

Use `export` / `import`.

## Definition of done

- [ ] Decorators implement same interface as component
- [ ] Stack at least two layers in Demo
- [ ] One sentence: Decorator vs Adapter

## After you finish

Continue to Dependency Injection (`../dependency-injection/`) or say ready for review.
