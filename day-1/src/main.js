import data from './data';
import { getCalculationFrom2Numbers } from './expenses-calculator/expenses-calculator-2-numbers';
import {
    getCalculationFromNumbers as getCalculationFrom3Numbers
} from './expenses-calculator/expenses-calculator-3-numbers';

const output = getCalculationFrom2Numbers(data);
console.log(`Part 1: ${output}`);
const output2 = getCalculationFrom3Numbers(data);
console.log(`Part 2: ${output2}`);