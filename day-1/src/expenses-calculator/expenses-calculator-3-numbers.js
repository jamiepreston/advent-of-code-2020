export const getNumbersAddingTo2020 = (numbers) =>
    numbers.reduce((acc, numA) => {
        const numArr = numbers.reduce((acc, tmpNumB) => {
            const tmpNumC = numbers.find(tmpNumC =>
                Number(numA) + Number(tmpNumB) + Number(tmpNumC) === 2020
            );
            return !acc && tmpNumC
                ? [Number(tmpNumB), Number(tmpNumC)]
                : acc;
        }, null);

        const [numB, numC] = numArr || []

        return !acc && numB && numC
            ? [Number(numA), Number(numB), Number(numC)]
            : acc;
    }, null);

export const getCalculationFromNumbers = (input) =>  {
    const numbers = input.split('\n');
    const [numA, numB, numC] = getNumbersAddingTo2020(numbers);

    return numA * numB * numC;
};