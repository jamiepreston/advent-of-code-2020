export default (input) =>  {
    const numbers = input.split('\n');
    return numbers.reduce((acc, numA) => {
        const numB = numbers.find(num =>
            Number(numA) + Number(num) === 2020
        );
        return !acc && numB
            ? [Number(numA), Number(numB)]
            : acc;
    }, null);
}
