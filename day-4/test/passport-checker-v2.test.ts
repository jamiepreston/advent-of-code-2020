import {
  checkPassport,
  checkAllPassports,
  checkByr,
  checkIyr,
  checkEyr,
  checkHgt,
  checkHcl,
  checkEcl,
  checkPid,
} from '../src/passport-checker-v2';

describe('passport-checker', () => {
  /*byr valid:   2002
  byr invalid: 2003

  hgt valid:   60in
  hgt valid:   190cm
  hgt invalid: 190in
  hgt invalid: 190

  hcl valid:   #123abc
  hcl invalid: #123abz
  hcl invalid: 123abc

  ecl valid:   brn
  ecl invalid: wat

  pid valid:   000000001
  pid invalid: 0123456789*/
  describe('#checkByr', () => {
    it('should return true for a valid byr', () => {
      const byr = '2002';
      const result = checkByr(byr);
      expect(result).toBe(true);
    });
    it('should return false for an invalid byr', () => {
      const byr = '2003';
      const result = checkByr(byr);
      expect(result).toBe(false);
    });
  });

  describe('#checkIyr', () => {
    it('should return true for a valid iyr', () => {
      const iyr = '2020';
      const result = checkIyr(iyr);
      expect(result).toBe(true);
    });
    it('should return false for an invalid iyr', () => {
      const iyr = '20022';
      const result = checkIyr(iyr);
      expect(result).toBe(false);
    });
  });

  describe('#checkEyr', () => {
    it('should return true for a valid eyr', () => {
      const eyr = '2020';
      const result = checkEyr(eyr);
      expect(result).toBe(true);
    });
    it('should return false for an invalid iyr', () => {
      const eyr = '20022';
      const result = checkEyr(eyr);
      expect(result).toBe(false);
    });
  });

  describe('#checkEyr', () => {
    it('should return true for a valid eyr', () => {
      const eyr = '2020';
      const result = checkEyr(eyr);
      expect(result).toBe(true);
    });
    it('should return false for an invalid eyr', () => {
      const eyr = '20022';
      const result = checkEyr(eyr);
      expect(result).toBe(false);
    });
  });

  describe('#checkHgt', () => {
    it('should return true for a valid hgt in inches', () => {
      const hgt = '60in';
      const result = checkHgt(hgt);
      expect(result).toBe(true);
    });
    it('should return true for a valid hgt in centimetres', () => {
      const hgt = '190cm';
      const result = checkHgt(hgt);
      expect(result).toBe(true);
    });
    it('should return false for an invalid hgt', () => {
      const hgt = '190in';
      const result = checkHgt(hgt);
      expect(result).toBe(false);
    });
    it('should return false for an invalid hgt', () => {
      const hgt = '190';
      const result = checkHgt(hgt);
      expect(result).toBe(false);
    });
  });

  describe('#checkHcl', () => {
    it('should return true for a valid hcl', () => {
      const hcl = '#123abc';
      const result = checkHcl(hcl);
      expect(result).toBe(true);
    });
    it('should return false for an invalid hcl', () => {
      const hcl = '123abc';
      const result = checkHcl(hcl);
      expect(result).toBe(false);
    });
  });

  describe('#checkEcl', () => {
    it('should return true for a valid hcl', () => {
      const ecl = 'amb';
      const result = checkEcl(ecl);
      expect(result).toBe(true);
    });
    it('should return false for an invalid hcl', () => {
      const ecl = 'xds';
      const result = checkEcl(ecl);
      expect(result).toBe(false);
    });
  });

  describe('#checkPid', () => {
    it('should return true for a valid pid', () => {
      const pid = '000000001';
      const result = checkPid(pid);
      expect(result).toBe(true);
    });
    it('should return false for an invalid hcl', () => {
      const pid = '0123456789';
      const result = checkPid(pid);
      expect(result).toBe(false);
    });
  });

  describe('#checkPassport', () => {
    describe('Given a valid passport', () => {
      const passport1 = { byr: '1926', iyr: '2018', eyr: '2021', hgt: '61in', hcl: '#18171d', ecl: 'amb', pid: '012533040', cid: '100' };
      const passport2 = { byr: '1946', iyr: '2019', eyr: '2025', hgt: '170cm', hcl: '#602927', ecl: 'grn', pid: '012533040', cid: '' };
      it('passport1 should return true', () => {
        const result = checkPassport(passport1);
        expect(result).toBe(true);
      })
      it('passport2 should return true', () => {
        const result = checkPassport(passport2);
        expect(result).toBe(true);
      })
    })
    describe('Given an invalid passport', () => {
      const passport1 = {"byr":"1926","iyr":"2018","eyr":"2021","hgt":"170","hcl":"#18171d","ecl":"amb","pid":"186cm","cid":"100"}
      const passport2 = {"byr":"1946","iyr":"1986","eyr":"1996","hgt":"170cm","hcl":"#602927","ecl":"grn","pid":"012533040","cid":""};
      it('passport1 should return false', () => {
        const result = checkPassport(passport1);
        expect(result).toBe(false);
      })
      it('passport2 should return false', () => {
        const result = checkPassport(passport2);
        expect(result).toBe(false);
      })
    })
  })
  describe('#checkAllPassports', () => {
    describe('Given a list of mixed valid and invalid passports', () => {
      const allPassports = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719

eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
`;
      it('should return 2', () => {
        const result = checkAllPassports(allPassports);
        expect(result).toEqual(4);
      })
    })
  })
})