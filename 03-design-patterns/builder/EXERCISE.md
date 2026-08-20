# Exercise — HttpRequest Builder

**Day 13a · Topic:** Builder  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

```typescript
class HttpRequest {
  constructor(
    public method: string,
    public url: string,
    public headers: Record<string, string>,
    public body?: string,
    public timeoutMs?: number,
  ) {}
}

// hard to read / easy to swap args
new HttpRequest("POST", "/users", { "Content-Type": "application/json" }, '{"name":"Ada"}', 5000);
```

## Requirements

1. One sentence: what problem does Builder solve here?
2. Create:
   - `HttpRequest` — the finished product (fields set in constructor or via builder only)
   - `HttpRequestBuilder` — fluent methods, e.g. `method`, `url`, `header`, `body`, `timeout`, `build()`
3. Rules:
   - `method` and `url` are **required** (enforce in `build()` — throw if missing)
   - Headers optional (default `{}`)
   - Body and timeout optional
4. **Demo:** build at least two requests (e.g. GET with timeout, POST with body + header) and log them

Suggested shape:

```text
practice/
  HttpRequest.ts
  HttpRequestBuilder.ts
  Demo.ts
```

Use `export` / `import`. Fluent API: `return this` from builder setters.

## Definition of done

- [ ] No telescoping constructor call in Demo for the happy path
- [ ] `build()` rejects missing method/url
- [ ] One sentence: Builder vs Factory

## After you finish Part A

Continue to State (`../state/`) or say ready for Part A review.
