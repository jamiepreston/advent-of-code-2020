import expensesCalculator from '../src/expenses-calculator';

describe('expenses-calculator', () => {
    it('should return true', () => {
        const input = '1234'
        const result = expensesCalculator(input)
        expect(result).toBe(true);
    })
})