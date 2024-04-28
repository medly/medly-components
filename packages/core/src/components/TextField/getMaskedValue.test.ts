import getMaskedValue from './getMaskedValue';

describe('getMaskedValue function', () => {
    // @ts-ignore
    const maskedValue = (value: string, selectionStart?: number) => getMaskedValue({ target: { value, selectionStart } }, 'DD / MM / YYYY');

    it('should return truncated value if selectionStart value is less then value length', () => {
        expect(maskedValue('11 / 11 / 1111', 6)).toEqual('11 / 1');
    });

    it('should not add extra char if value length is equal to mask length', () => {
        expect(maskedValue('11 / 11 / 11111')).toEqual('11 / 11 / 1111');
    });

    it('should add special character in between', () => {
        expect(maskedValue('11 / 111')).toEqual('11 / 11 / 1');
    });
});
