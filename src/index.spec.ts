/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-11-25
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/eleventy-filter-add-attribute', () => {
    it('should return a eleventy-filter-add-attribute string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a eleventy-filter-add-attribute string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
