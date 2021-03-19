import {
    getNumbersAddingTo2020,
    getCalculationFrom2Numbers,
} from '../../src/expenses-calculator/expenses-calculator-2-numbers';

describe('expenses-calculator-2-numbers', () => {
    describe('#getNumbersAddingTo2020', () => {
        describe('Given an array of numbers', () => {
            const input = ['1721','979','366','299','675','1456'];
            it('should return the first two numbers which add up to 2020', () => {
                const result = getNumbersAddingTo2020(input);

                expect(result).toEqual([1721,299]);
            });
        });
    });

    describe('#getCalculationFrom2Numbers', () => {
        describe('Given a string containing a series of numbers', () => {
            const input = `1721
979
366
299
675
1456`;
            it('should return the first two numbers which add up to 2020', () => {
                const result = getCalculationFrom2Numbers(input);

                expect(result).toEqual(514579);
            });
        });
    });
});