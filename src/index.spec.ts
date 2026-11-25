/**
 * 🧪 testing module
 * @version 1.0.1
 * @date 2026-11-25
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import fn from './index';

describe('addAttribute()', () => {
    const FN = fn;
    it('should return a key=value attribute', () => {
        expect(FN('value', 'key')).toBe(` key="value" `);
        expect(FN('"value"', 'key')).toBe(` key='"value"' `);
        expect(FN('"value"', 'key', true)).toBe(` key='"value"' `);
    });
    it('should not return a key=value attribute', () => {
        expect(FN('"value"', 'key', false)).toBe(``);
    });
    it('should return a key=value attribute without pad', () => {
        expect(FN('value', 'key', true, { pad: '' })).toBe(`key="value"`);
        expect(FN('"value"', 'key', true, { pad: '' })).toBe(`key='"value"'`);
    });
    it('should return a key=value attribute with different pad', () => {
        expect(FN('value', 'key', true, { pre: '' })).toBe(`key="value" `);
        expect(FN('value', 'key', true, { post: '' })).toBe(` key="value"`);
    });
});
