import {
  checkPassport,
  checkAllPassports,
} from '../src/passport-checker-v1';

describe('passport-checker', () => {
  describe('#checkPassport', () => {
    describe('Given a valid passport', () => {
      const passport = {
        ecl:'gry',
        pid:'860033327',
        eyr:'2020',
        hcl:'#fffffd',
        byr:'1937',
        iyr:'2017',
        cid:'147',
        hgt:'183cm'
      };
      it('should return true', () => {
        const result = checkPassport(passport);
        expect(result).toBe(true);
      })
    })
    describe('Given an invalid passport', () => {
      const passport = {
        ecl:'gry',
        pid:'860033327',
        eyr:'2020',
        hcl:'#fffffd',
        byr:'1937',
        iyr:'2017',
        cid:'147',
        hgt:''
      };
      it('should return false', () => {
        const result = checkPassport(passport);
        expect(result).toBe(false);
      })
    })
  })
  describe('#checkAllPassports', () => {
    describe('Given a list of mixed valid and invalid passports', () => {
      const allPassports = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;
      it('should return 2', () => {
        const result = checkAllPassports(allPassports);
        expect(result).toEqual(2);
      })
    })
  })
})