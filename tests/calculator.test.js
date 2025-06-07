const { calculateTotal } = require('../site/assets/js/calculator');

describe('calculateTotal', () => {
    it('returns 0 for invalid input', () => {
        expect(calculateTotal(null)).toBe(0);
    });

    it('sums price times quantity', () => {
        const items = [
            { price: 100, qty: 2 },
            { price: 50, qty: 1 }
        ];
        expect(calculateTotal(items)).toBe(250);
    });

    it('ignores invalid quantities', () => {
        const items = [
            { price: 100, qty: -1 },
            { price: 20, qty: '2' }
        ];
        expect(calculateTotal(items)).toBe(40);
    });
});
