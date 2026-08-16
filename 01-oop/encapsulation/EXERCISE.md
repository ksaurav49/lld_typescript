# Exercise — Encapsulated Temperature

**Day 2 · Topic:** Encapsulation & Access Modifiers  
**Your code goes in:** [`practice/Temperature.ts`](./practice/Temperature.ts)

## Requirements

Implement a `Temperature` class that stores temperature in **Celsius internally**:

1. **Private state**
   - `private celsius: number`

2. **Constructor**
   - `constructor(celsius: number)` — reject values below absolute zero in Celsius (`-273.15`)

3. **Public API**
   - `getCelsius(): number`
   - `getFahrenheit(): number` — convert from stored Celsius (`F = C * 9/5 + 32`)
   - `setCelsius(celsius: number): void` — same validation as constructor
   - `setFahrenheit(fahrenheit: number): void` — convert to Celsius, then validate/store

4. **Demo** at the bottom: create → set via Fahrenheit → print both Celsius and Fahrenheit

## Constraints

- Outside code must **not** be able to assign `celsius` directly
- No inheritance / interfaces yet
- Keep conversion logic inside the class

## Definition of done

- [ ] `practice/Temperature.ts` implemented
- [ ] Invalid temperatures rejected
- [ ] You can explain in one sentence why `celsius` is private

## After you finish

Paste the code in chat (or say the file is ready) for review.
