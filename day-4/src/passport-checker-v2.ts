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
export const checkByr = (val:string): boolean =>
  val.match(/^(?:19+[2-9][0-9])|(?:200[12])$/) !== null;

export const checkIyr = (val:string): boolean =>
  val.match(/^20((1[0-9])|(20))$/) !== null;

export const checkEyr = (val:string): boolean =>
  val.match(/^20(([12][0-9])|(30))$/) !== null;

export const checkHgt = (val:string): boolean =>
  val.match(/(^1(?:(?:[5-8][0-9])|(?:9[0-3]))cm$)|(^(?:(?:59)|(?:6[0-9])|(?:7[0-6]))in)$/) !== null;

export const checkHcl = (val:string): boolean =>
  val.match(/^\#([0-9]|[a-z]){6}$/) !== null;

export const checkEcl = (val:string): boolean =>
  val.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) !== null;

export const checkPid = (val:string): boolean =>
  val.match(/^[0-9]{9}$/) !== null;

const validation = {
  byr: checkByr,
  iyr: checkIyr,
  eyr: checkEyr,
  hgt: checkHgt,
  hcl: checkHcl,
  ecl: checkEcl,
  pid: checkPid,
};

export const checkPassport = (passport: passport): boolean =>
  Object.keys(validation)
    .every((key) => {
      const val = passport[key];
      const fn = validation[key];
      return fn(val);
    });

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
