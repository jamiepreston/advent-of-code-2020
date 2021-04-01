interface passport {
  byr: string,
  iyr: string,
  eyr: string,
  hgt: string,
  hcl: string,
  ecl: string,
  pid: string,
  cid?: string,
}

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

export const checkPassport = (passport: passport): boolean =>
  requiredKeys.every(key => passport[key] !== '');

export const checkAllPassports = (allPassports: string): number => {
  const passportList = allPassports.split('\n\n');
  const passports = passportList.map((p:string): passport => {

    const keyValues = p
      .replace(/\n/g, ' ')
      .split(' ');
    return keyValues.reduce((accumulator: passport, keyValuePair: string): passport => {
      const [ key, value ] = keyValuePair.split(':');
      return {
        ...accumulator,
        [key]: value,
      };
    }, { byr: '', iyr: '', eyr: '', hgt: '', hcl: '', ecl: '', pid: '', cid: ''});
  })

  return passports
    .filter(checkPassport)
    .length;
};
