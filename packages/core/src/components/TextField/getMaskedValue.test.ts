import getMaskedValue from './getMaskedValue';

describe('getMaskedValue function', () => {
    it('should return truncated value if selectionStart value is less then value length ', () => {
        // @ts-ignore
        const value = getMaskedValue({ target: { value: '11 / 11 / 1111', selectionStart: 6 } }, 'DD / MM / YYYY');
        expect(value).toEqual('11 / 1');
    });

    it('should not add extra char if value length is equal to mask length ', () => {
        // @ts-ignore
        const value = getMaskedValue({ target: { value: '11 / 11 / 11111' } }, 'DD / MM / YYYY');
        expect(value).toEqual('11 / 11 / 1111');
    });

    it('should truncate special character from end if any', () => {
        // @ts-ignore
        const value = getMaskedValue({ target: { value: '11 / 11 /' } }, 'DD / MM / YYYY');
        expect(value).toEqual('11 / 11');
    });

    it('should add special character in between', () => {
        // @ts-ignore
        const value = getMaskedValue({ target: { value: '11 / 111' } }, 'DD / MM / YYYY');
        expect(value).toEqual('11 / 11 / 1');
    });

    it('should add remaining mask', () => {
        // @ts-ignore
        const value = getMaskedValue({ target: { value: '11 / 11' } }, 'DD / MM / YYYY');
        expect(value).toEqual('11 / 11 / ');
    });
});
