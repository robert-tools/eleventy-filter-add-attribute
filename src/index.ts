/**
 * 🎯 Adds an HTML attribute string based on the given value, key, and condition.
 * @param {string} value ➡️ the value of the attribute
 * @param {string} key ➡️ the key of the attribute
 * @param {boolean} condition ➡️ whether to include the attribute or not
 * @param {Record<string, any>} options ➡️ additional options for formatting
 * @returns {string} 📤 the formatted attribute or an empty string
 */

const fn = (
    value: string,
    key: string,
    condition = true,
    options?: Record<string, any>
): string => {
    if (value === undefined || value === null) {
        return '';
    }
    const pad = options?.pad ?? ' ';
    const pre = options?.pre ?? pad;
    const post = options?.post ?? pad;
    const quote = value.indexOf('"') !== -1 ? "'" : '"';
    return condition ? `${pre}${key}=${quote}${value}${quote}${post}` : '';
};

export default fn;
