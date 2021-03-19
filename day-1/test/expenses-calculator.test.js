import {
    getNumbersAddingTo2020,
    getCalculationFromNumbers,
} from '../src/expenses-calculator';

describe('expenses-calculator', () => {
    describe('#getNumbersAddingTo2020', () => {
        describe('Given an array of numbers', () => {
            const input = ['1721','979','366','299','675','1456'];
            it('should return the first two numbers which add up to 2020', () => {
                const result = getNumbersAddingTo2020(input);

                expect(result).toEqual([1721,299]);
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
            it('should return the first two numbers which add up to 2020', () => {
                const result = getCalculationFromNumbers(input);

                expect(result).toEqual(514579);
            });
        });
    });
});