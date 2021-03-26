export const passwordIsValid = (password) => {
    const [occurrences, rawLetter, pwString] = password.split(' ');
    const letter = rawLetter.replace(':', '');
    const [min, max] = occurrences.split('-')

    const occurrenceCount = [...pwString]
        .filter(l => l === letter)
        .length;

    return occurrenceCount >= min
        && occurrenceCount <= max;
}

export const checkAllPasswords = passwords => {
    const passwordsArr = passwords.split('\n');
    const validPasswords = passwordsArr.filter(passwordIsValid);
    return validPasswords.length;
}