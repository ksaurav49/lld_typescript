// Refactor DiscountCalculator for OCP (see ../EXERCISE.md)
// practice/
//   Discount.ts              # interface
//   PercentageDiscount.ts
//   FixedDiscount.ts
//   NoDiscount.ts
//   DiscountCalculator.ts    # optional thin wrapper + demo

class DiscountCalculator {
    private discount: Discount;

    constructor(discount: Discount) {
        this.discount = discount;
    }

    calculateDiscount(amount: number) {
        return this.discount.applyDiscount(amount);
    }
}

const percentageDiscount = new PercentageDiscount();
const fixedDiscount = new FixedDiscount();
const noDiscount = new NoDiscount();

const discountCalculator = new DiscountCalculator(percentageDiscount);
console.log(discountCalculator.calculateDiscount(100));

const discountCalculator2 = new DiscountCalculator(fixedDiscount);
console.log(discountCalculator2.calculateDiscount(100));

const discountCalculator3 = new DiscountCalculator(noDiscount);
console.log(discountCalculator3.calculateDiscount(100));