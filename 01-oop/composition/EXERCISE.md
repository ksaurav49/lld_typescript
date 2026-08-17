# Exercise — Computer has parts (composition)

**Day 5 · Topic:** Composition vs inheritance  
**Your code goes in:** [`practice/`](./practice/)

## Requirements

Model a computer with **composition** (not inheritance):

1. Create small part classes:
   - `Cpu` with `compute(): string` (e.g. returns `"computing..."`)
   - `Memory` with `load(data: string): string`
   - `Disk` with `read(): string` / `write(data: string): string` (keep them simple — logs or return strings)

2. Create `Computer` that **has**:
   - `private cpu: Cpu`
   - `private memory: Memory`
   - `private disk: Disk`
   - Inject them via the constructor (composition)

3. Add a method `boot(): void` (or `run(task: string): void`) that **delegates** to the parts (e.g. memory load → cpu compute → disk write). `Computer` should not `extends Cpu`.

4. **Demo:** construct a `Computer` with real parts and call `boot()` / `run()`.

Suggested files:

```text
practice/
  Cpu.ts
  Memory.ts
  Disk.ts
  Computer.ts   # + demo
```

## Constraints

- No `Computer extends Cpu` (or similar)
- Prefer constructor injection of parts
- Keep it shallow — no design patterns required

## Definition of done

- [ ] Parts + Computer using has-a
- [ ] One sentence: why composition instead of inheritance here

## After you finish

Say the files are ready for review.
