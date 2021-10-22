import { updateNestedValue } from './updateNestedValue';

describe('updateNestedValue', () => {
    it('should replace a top-level property value', () => {
        const input = { a: { b: 0, c: 0 } };
        const result = updateNestedValue(input, 'a', { b: 1, c: 1 });
        expect(result).toEqual({ a: { b: 1, c: 1 } });
    });

    it('should replace a nested property value', () => {
        const input = { a: { b: { c: { d: { e: 0 } } } } };
        const result = updateNestedValue(input, 'a.b.c.d', { e: 1 });
        expect(result).toEqual({ a: { b: { c: { d: { e: 1 } } } } });
    });

    it('should return a new object despite the same effective result', () => {
        const input = { a: { b: 0 } };
        const result = updateNestedValue(input, 'a', { b: 0 });
        expect(result).not.toBe(input);
        expect(result).toEqual(input);
    });

    it('should retain references to non-primitive and non-object values', () => {
        const shared = [1, 2, 3];
        const input = { a: { b: 0 }, shared };
        const result = updateNestedValue(input, 'a', { b: 1 }) as any;
        expect(result.shared).toBe(shared);
    });
});
