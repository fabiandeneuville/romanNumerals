const romanToNumber = require('../functions/romanToNumber')

describe('romanToNumber function tests suite', () => {
    
    describe('case when roman = "', () => {
        it('should return 0', () => {
            expect(romanToNumber("")).toBe(0)
        })
    })

    describe('case when roman = "I"', () => {
        it('should return 1', () => {
            expect(romanToNumber("I")).toBe(1);
        })
    })

    describe('case when roman = "IV"', () => {
        it('should return 4', () => {
            expect(romanToNumber("IV")).toBe(4);
        })
    })

    describe('case when roman = "IX"', () => {
        it('should return 9', () => {
            expect(romanToNumber("IX")).toBe(9);
        })
    })

    describe('case when roman = "XL"', () => {
        it('should return 40', () => {
            expect(romanToNumber("XL")).toBe(40);
        })
    })

    describe('case when roman = "LXIX"', () => {
        it('should return 69', () => {
            expect(romanToNumber("LXIX")).toBe(69);
        })
    })

    describe('case when roman = "XC"', () => {
        it('should return 90', () => {
            expect(romanToNumber("XC")).toBe(90);
        })
    })

    describe('case when roman = "CD"', () => {
        it('should return 400', () => {
            expect(romanToNumber("CD")).toBe(400);
        })
    })

    describe('case when roman = "DCLXVI"', () => {
        it('should return 666', () => {
            expect(romanToNumber("DCLXVI")).toBe(666);
        })
    })

    describe('case when roman = "CM"', () => {
        it('should return 900', () => {
            expect(romanToNumber("CM")).toBe(900);
        })
    })

    describe('case when roman = "MDCXXXVIII"', () => {
        it('should return 1638', () => {
            expect(romanToNumber("MDCXXXVIII")).toBe(1638);
        })
    })

    describe('case when roman = "MCMLXXXVI"', () => {
        it('should return 1986', () => {
            expect(romanToNumber("MCMLXXXVI")).toBe(1986);
        })
    })

    describe('case when roman = "MMMXXII"', () => {
        it('should return 2022', () => {
            expect(romanToNumber("MMXXII")).toBe(2022);
        })
    })
})