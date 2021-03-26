export const passwordIsValid = (password) => {
    const [positions, requiredLetter, actualPassword] = password
      .replace(':', '')
      .split(' ');
    const [posA, posB] = positions
      .split('-')
      .map(p => p - 1);
    const posAValid = actualPassword[posA] === requiredLetter;
    const posBValid = actualPassword[posB] === requiredLetter;
    // ^ = Bitwise XOR
    return Boolean(posAValid ^ posBValid);
}

export const checkAllPasswords = passwords => {
    const passwordsArr = passwords.split('\n');
    const validPasswords = passwordsArr.filter(passwordIsValid);
    return validPasswords.length;
}