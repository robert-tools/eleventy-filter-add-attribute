/**
 * 🧪 testing module
 * @version 1.1.0
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
        const param: Record<string, string> = {};
        expect(FN('"value"', 'key', false)).toBe(``);
        expect(FN(undefined as any, 'key', false)).toBe(``);
        expect(FN(null as any, 'key', false)).toBe(``);
        expect(FN(param.blubb as string, 'key', false)).toBe(``);
    });
    it('should return a key=value attribute without pad', () => {
        expect(FN('value', 'key', true, { pad: '' })).toBe(`key="value"`);
        expect(FN('"value"', 'key', true, { pad: '' })).toBe(`key='"value"'`);
    });
    it('should return a key=value attribute with different pad', () => {
        expect(FN('value', 'key', true, { pre: '' })).toBe(`key="value" `);
        expect(FN('value', 'key', true, { post: '' })).toBe(` key="value"`);
    });
    it('should return just the key', () => {
        expect(FN('', 'key', true, { keyOnly: true })).toBe(` key `);
        expect(FN(undefined as any, 'k', true, { keyOnly: true })).toBe(` k `);
        expect(FN(null as any, 'key', true, { keyOnly: true })).toBe(` key `);
    });
});
