export const getNumbersAddingTo2020 = (numbers) =>
    numbers.reduce((acc, numA) => {
        const numB = numbers.find(num =>
            Number(numA) + Number(num) === 2020
        );
        return !acc && numB
            ? [Number(numA), Number(numB)]
            : acc;
    }, null);

export const getCalculationFrom2Numbers = (input) =>  {
    const numbers = input.split('\n');
    const [numA, numB] = getNumbersAddingTo2020(numbers);

    return numA * numB;
};