import {
    passwordIsValid,
    checkAllPasswords,
} from '../src/password-checker-v2';

describe('password-checker-v2', () => {
    describe('passwordIsValid', () => {
        describe('Given a valid password', () => {
            it('should return true', () => {
                const password = '1-3 a: abcde';
                const result = passwordIsValid(password)
                expect(result).toBe(true)
            })
            it('2-9 c: acaaaaaaaaa should return true', () => {
                const password = '2-9 c: acaaaaaaaaa';
    
                const result = passwordIsValid(password)
                expect(result).toBe(true)
            })
        });

        describe('Given an invalid password', () => {
            it('1-3 b: cdefg should return false', () => {
                const password = '1-3 b: cdefg';
    
                const result = passwordIsValid(password)
                expect(result).toBe(false)
            })
            it('2-9 c: ccccccccc should return false', () => {
                const password = '2-9 c: ccccccccc';

                const result = passwordIsValid(password)
                expect(result).toBe(false)
            })
        })
    })
    describe('checkAllPasswords', () => {
        describe('Given a string of passwords where 2 are valid', () => {
            it('should return 2', () => {
                const passwords = `1-3 a: abcdeq
1-3 b: cdefgq
2-9 c: acaaaaaaaaaq
2-9 c: cccccccccq`;

                const result = checkAllPasswords(passwords)
                expect(result).toEqual(2)
            })


        })
    })
})