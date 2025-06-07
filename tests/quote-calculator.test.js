const { getUnitPrice } = require('../site/assets/js/quote-calculator');

describe('getUnitPrice', () => {
    it('returns base price plus labor for preset builds', () => {
        expect(getUnitPrice('barebones')).toBe(500);
        expect(getUnitPrice('value')).toBe(575);
        expect(getUnitPrice('latest')).toBe(650);
    });

    it('adds custom part costs when buildType is custom', () => {
        const price = getUnitPrice('custom', { cpu: 'i5-9500', ram: '16', ssd: '512' });
        expect(price).toBe(315); // 75 + 60 + 80 + 100 labor
    });
});
