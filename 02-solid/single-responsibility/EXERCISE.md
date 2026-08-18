# Exercise — Refactor UserService (SRP)

**Day 6 · Topic:** Single Responsibility  
**Your code goes in:** [`practice/`](./practice/)

## Starting point (bad)

You’ll refactor something like:

```typescript
class UserService {
  createUser(email: string, password: string): void {
    if (!email.includes("@") || password.length < 6) {
      throw new Error("Invalid input");
    }
    console.log(`Saving user ${email} to database`);
    console.log(`Sending welcome email to ${email}`);
  }
}
```

## Requirements

1. Put the bad version in `practice/UserService.bad.ts` (or copy into NOTES mentally — your call) **or** just start from the good design.
2. Split into focused pieces, for example:
   - `UserValidator` — validate email/password
   - `UserRepository` — save user (console log is fine)
   - `WelcomeEmailSender` — send welcome email (console log is fine)
   - `UserService` — **orchestrates** only: validate → save → send
3. `UserService` should depend on those collaborators (composition) via constructor.
4. **Demo:** `createUser` once with valid data.

Suggested files:

```text
practice/
  UserValidator.ts
  UserRepository.ts
  WelcomeEmailSender.ts
  UserService.ts   # + demo
```

## Definition of done

- [ ] Responsibilities split
- [ ] One sentence: what was the SRP violation in the original?

## After you finish

Say ready for review.
