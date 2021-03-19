import expensesCalculator from '../src/expenses-calculator';

describe('expenses-calculator', () => {
    describe('Given a simple array of numbers', () => {
        const input = `1721
979
366
299
675
1456`;
        it('should return the first two numbers which add up to 2020', () => {
            const result = expensesCalculator(input);

            expect(result).toEqual([1721,299]);
        });
    });
});