export default (password) => {
    const [occurrences, rawLetter, pwString] = password.split(' ');
    const letter = rawLetter.replace(':', '');
    const [min, max] = occurrences.split('-')

    const occurrenceCount = [...pwString]
        .filter(l => l === letter)
        .length;

    return occurrenceCount >= min
        && occurrenceCount <= max;
}