import {
    getNumbersAddingTo2020,
    getCalculationFromNumbers,
} from '../../src/expenses-calculator/expenses-calculator-3-numbers';

describe('expenses-calculator-3-numbers', () => {
    describe('#getNumbersAddingTo2020', () => {
        describe('Given an array of numbers', () => {
            const input = ['1721','979','366','299','675','1456'];
            it('should return the first three numbers which add up to 2020', () => {
                const result = getNumbersAddingTo2020(input);
                expect(result).toEqual([979,366,675]);
            });
        });
    });

    describe('#getCalculationFromNumbers', () => {
        describe('Given a string containing a series of numbers', () => {
            const input = `1721
979
366
299
675
1456`;
            it('should return the first three numbers which add up to 2020', () => {
                const result = getCalculationFromNumbers(input);

                expect(result).toEqual(241861950);
            });
        });
    });
});