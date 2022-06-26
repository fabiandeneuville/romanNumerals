const numberToRoman = require('../functions/numberToRoman')

describe('numberToRoman function tests suite', () => {
    
    describe('case when number = 0', () => {
        it('should return ""', () => {
            expect(numberToRoman(0)).toBe("");
        })
    })
    
    describe('case when number = 1', () => {
        it('should return "I"', () => {
            expect(numberToRoman(1)).toBe("I");
        })
    })

    describe('case when number = 9', () => {
        it('should return "IX"', () => {
            expect(numberToRoman(9)).toBe("IX");
        })
    })

    describe('case when number = 69', () => {
        it('should return "LXIX"', () => {
            expect(numberToRoman(69)).toBe("LXIX");
        })
    })

    describe('case when number = 666', () => {
        it('should return "DCLXVI"', () => {
            expect(numberToRoman(666)).toBe("DCLXVI");
        })
    })

    describe('case when number = 1638', () => {
        it('should return "MDCXXXVIII"', () => {
            expect(numberToRoman(1638)).toBe("MDCXXXVIII");
        })
    })

    describe('case when number = 1986', () => {
        it('should return "MCMLXXXVI"', () => {
            expect(numberToRoman(1986)).toBe("MCMLXXXVI")
        })
    })

    describe('case when number = 2022', () => {
        it('should return "MMXXII"', () => {
            expect(numberToRoman(2022)).toBe("MMXXII");
        })
    })
})