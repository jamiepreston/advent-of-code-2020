import {
    passwordIsValid,
    checkAllPasswords,
} from '../src/password-checker-v1';

describe('password-checker', () => {
    describe('passwordIsValid', () => {
        describe('Given a valid password', () => {
            it('should return true', () => {
                const password = '1-3 a: abcde';
                const result = passwordIsValid(password)
                expect(result).toBe(true)
            })
            it('should return true', () => {
                const password = '2-9 c: ccccccccc';
    
                const result = passwordIsValid(password)
                expect(result).toBe(true)
            })
        })
        describe('Given an invalid password', () => {
            it('should return false', () => {
                const password = '1-3 b: cdefg';
    
                const result = passwordIsValid(password)
                expect(result).toBe(false)
            })
        })
    })
    describe('checkAllPasswords', () => {
    describe('Given a string of passwords where 2 are valid', () => {
        it('should return 2', () => {
            const passwords = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

            const result = checkAllPasswords(passwords)
            expect(result).toEqual(2)
        })


    })
    })
})