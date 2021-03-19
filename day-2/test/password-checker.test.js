import passwordChecker from '../src/password-checker';
describe('password-checker', () => {
    describe('Given a valid password', () => {
        it('should return true', () => {
            const password = '1-3 a: abcde';
            const result = passwordChecker(password)
            expect(result).toBe(true)
        })
        it('should return true', () => {
            const password = '2-9 c: ccccccccc';

            const result = passwordChecker(password)
            expect(result).toBe(true)
        })
    })
    describe('Given an invalid password', () => {
        it('should return false', () => {
            const password = '1-3 b: cdefg';

            const result = passwordChecker(password)
            expect(result).toBe(false)
        })
    })

})