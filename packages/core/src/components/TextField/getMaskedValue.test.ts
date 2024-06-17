import getMaskedValue from './getMaskedValue';

describe('getMaskedValue function', () => {
    // @ts-expect-error
    const maskedValue = (value: string, selectionStart?: number, data?: string | null = null) =>
        // @ts-expect-error
        getMaskedValue({ target: { value, selectionStart }, nativeEvent: { data } }, 'DD / MM / YYYY');

    it('should add blank space on deleting any non special character and move cursor after the blank space', () => {
        expect(maskedValue('11 / 1 / 1111', 5, null)).toEqual({ maskedValue: '11 /  1 / 1111', selectionStart: 6 });
    });

    it('should not move cursor on deleting any special character', () => {
        expect(maskedValue('11 / 1 / 1111', 4, null)).toEqual({ maskedValue: '11 /  1 / 1111', selectionStart: 4 });
    });

    it('should not add extra char if value length is equal to mask length', () => {
        expect(maskedValue('11 / 11 / 11111')).toEqual({ maskedValue: '11 / 11 / 1111', selectionStart: 14 });
    });

    it('should add special character automatically in between', () => {
        expect(maskedValue('11 / 111')).toEqual({ maskedValue: '11 / 11 / 1', selectionStart: 11 });
    });
});
