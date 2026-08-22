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

**Builder** = a **separate** object that collects values step by step, then `build()` creates the finished product.

```text
HttpRequestBuilder          HttpRequest (product)
  .method("POST")
  .url("/users")
  .header(...)
  .body("{...}")
  .build()  ─────────────▶  new HttpRequest(method, url, headers, body)
```

- Readable, named steps
- Optional fields stay optional
- Validation lives in `build()`

## Mental model

> “Don’t pass 8 constructor args — chain clear steps on a builder, then `build()` a finished object.”

Analogy: cook in a **pan** (builder), then serve on a **plate** (product). Guests only get the plate.

## Who has setters? (important)

| Class | Setters / fluent methods? | Role |
|--------|---------------------------|------|
| `HttpRequestBuilder` | **Yes** — `method()`, `url()`, `header()`, `body()`, … | Assemble values |
| `HttpRequest` | **No** (usual design) — constructor + getters / `readonly` fields | Finished product |

**Only the builder has setters.** The product receives values **once** via its constructor.

## How the builder passes values to the product

1. Fluent methods **store fields on the builder** (`this.method = ...`).
2. `build()` **validates**, then calls `new HttpRequest(...)` and **passes those fields in**.

```typescript
class HttpRequestBuilder {
  private method?: string;
  private url?: string;
  private headers: Record<string, string> = {};
  private body?: string;
  private timeoutMs?: number;

  method(m: string): this {
    this.method = m; // saved on BUILDER
    return this;
  }

  url(u: string): this {
    this.url = u;
    return this;
  }

  header(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  body(b: string): this {
    this.body = b;
    return this;
  }

  timeout(ms: number): this {
    this.timeoutMs = ms;
    return this;
  }

  build(): HttpRequest {
    if (!this.method || !this.url) {
      throw new Error("method and url are required");
    }
    // Pass builder's values into the product constructor
    return new HttpRequest(
      this.method,
      this.url,
      this.headers,
      this.body,
      this.timeoutMs,
    );
  }
}

class HttpRequest {
  constructor(
    public readonly method: string,
    public readonly url: string,
    public readonly headers: Record<string, string>,
    public readonly body?: string,
    public readonly timeoutMs?: number,
  ) {}
  // no setMethod / setUrl — product is done
}
```

### Flow

```text
builder.method("POST")  →  builder.method = "POST"
builder.url("/users")   →  builder.url = "/users"
builder.build()
        │
        └─ new HttpRequest("POST", "/users", headers, body, timeout)
              ↑
         values copied in via constructor
```

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

Direction: `BurgerBuilder` with `addCheese()`, `addBacon()`, `withSauce(s)`, `build()` → `new Burger(...)`.

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

> "Only the builder has setters; build() constructs an HttpRequest via its constructor."

## Related

- **Factory** — *which* type to create  
- **Builder** — *how* to assemble a complex instance of (usually) one type  

## FAQ — “Why not setters on HttpRequest itself?”

```typescript
class HttpRequest {
  setMethod(m: string): this { ...; return this; }
  setUrl(u: string): this { ...; return this; }
  build(): this { /* validate */; return this; }
}
```

That **can** work for tiny demos (fluent API on the **same** object). Weaknesses:

1. **Half-built objects are already `HttpRequest`** — someone can `send(req)` before url is set.
2. **`build()` returns `this`** — you can still call setters afterward; construction never “ends.”
3. **One class does two jobs** — assembling options *and* being the runtime request.
4. Harder to keep a clean, read-only finished product.

Classic Builder:

```text
HttpRequestBuilder  →  mutable, only for building (has setters)
build()             →  new HttpRequest(...) 
HttpRequest         →  no public setters
```

> "Fluent setters on the product are a light version. Separate Builder = clear construction phase + finished product."

### For this exercise

Two types: `HttpRequestBuilder` (setters + `build`) + `HttpRequest` (constructor only, no setter chain).

## Pitfalls / Interview notes (from practice)

- `build()` **throwing** on missing method/url is correct — that’s the validation gate.
- `try/catch` in Demo is **fine** to show the failure path; not required for every happy-path call.
- Prefer showing **two** built requests in Demo (e.g. GET + POST) as the exercise asks.
- Optional fields (`body`, `timeout`) can be `string | undefined` / optional ctor params — empty string works for a demo.
