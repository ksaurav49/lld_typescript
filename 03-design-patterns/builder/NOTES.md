# Builder Pattern

**Day 13a · Phase 3 — Design Patterns**

## Problem

You need an object with **many optional fields** (HTTP request, SQL query, burger, user profile). Constructors become ugly:

```typescript
new HttpRequest("GET", "/users", headers, body, timeout, retries, auth);
// which arg is which? what if body is optional?
```

Telescoping constructors / boolean flags get worse as options grow.

## Pattern idea

**Builder** = a separate object that constructs step by step, then returns the finished product via `build()`.

```text
RequestBuilder
  .method("POST")
  .url("/users")
  .header("Content-Type", "application/json")
  .body("{...}")
  .build()  →  HttpRequest (immutable-ish finished object)
```

- Readable, named steps
- Optional fields stay optional
- Validation can live in `build()`

## Mental model

> “Don’t pass 8 constructor args — chain clear steps, then `build()`.”

## Tiny bad → direction

```typescript
class Burger {
  constructor(
    public bun: string,
    public patty: string,
    public cheese?: boolean,
    public bacon?: boolean,
    public sauce?: string,
  ) {}
}
```

Direction: `BurgerBuilder` with `addCheese()`, `addBacon()`, `withSauce(s)`, `build()`.

## When to use

- Many optional / configurable parts
- You want a readable construction API
- Product should be created in a valid final state (`build()` checks)

## When NOT to use

- 1–2 required fields only — a normal constructor is fine
- Builder more complex than the product itself

## Interview lines

> "I'm using Builder because the object has many optional parameters and I want a fluent, readable construction API."

> "Validation happens in build() so we never return a half-invalid object."

## Related

- **Factory** — *which* type to create  
- **Builder** — *how* to assemble a complex instance of (usually) one type

## FAQ — “Why not setters / fluent methods on HttpRequest itself?”

This is a common (good) challenge:

```typescript
class HttpRequest {
  setMethod(m: string): this { ...; return this; }
  setUrl(u: string): this { ...; return this; }
  build(): this { /* validate */; return this; }
}
```

That **can** work for tiny demos. It is a fluent construction API on the **same** object.

### What’s weak about it

1. **Half-built objects are usable**  
   Someone can call `setMethod("GET")` and pass the object around **before** `build()`. Other code may send an invalid request.

2. **`build()` doesn’t finish anything**  
   If `build()` returns `this`, you can still `setBody(...)` afterward. There is no clear “construction over → immutable product.”

3. **Two jobs in one class**  
   - Construction (optional fields, validation)  
   - Runtime use (send request, read url)  
   Mixing them muddies SRP as the class grows.

4. **Harder to reuse construction**  
   A separate builder can be reset/cloned to make many similar requests; the product stays a clean data object.

### What classic Builder adds

```text
HttpRequestBuilder  →  mutable, only for building
build()             →  new HttpRequest(...)  (finished product)

HttpRequest         →  no public setters (or only rare ones)
```

After `build()`, callers use a **complete** request. They shouldn’t keep “setting” it into a different request.

### Interview line

> "Fluent setters on the product are a light version. I prefer a separate Builder when I want a clear construction phase and an immutable (or read-only) finished object."

### For this exercise

Prefer **two types**: `HttpRequestBuilder` + `HttpRequest` (product without the setter chain).
