const applyMasking = (value: string, mask: string, selectionStart: number, data: string | null): string => {
    const { length } = value,
        lastChar = value.charAt(length - 1),
        alphaRegex = /[a-zA-Z]/, //NOSONAR
        alphaNumericRegex = /[a-zA-Z0-9]/, //NOSONAR
        specialCharsRegex = /[^a-zA-Z0-9]/; //NOSONAR

    let newValue;

    if (length > mask.length) {
        // if user types more char then mask length
        newValue = value.slice(0, -1);
    } else if (
        data === null &&
        specialCharsRegex.test(mask.charAt(selectionStart)) &&
        !specialCharsRegex.test(mask.charAt(selectionStart + 1)) &&
        mask.slice(0, selectionStart).replace(/[^a-zA-Z0-9]+$/, '').length === length //NOSONAR
    ) {
        // if user deletes the last special character
        newValue = value;
    } else {
        const remainingMask = mask.substr(length),
            numberIndex = remainingMask.match(alphaNumericRegex)?.index;

        newValue = value + remainingMask.substr(0, numberIndex);
    }

    return newValue;
};

export const getMaskedValue = (event: React.ChangeEvent<HTMLInputElement>, mask: string) => {
    let maskedValue;

    const specialCharsRegex = /[^a-zA-Z0-9]/g, //NOSONAR
        { value, selectionStart } = event.target,
        // @ts-expect-error
        { data } = event.nativeEvent;

    if (selectionStart !== null && selectionStart < value.length) {
        const cursorText = value[selectionStart ? selectionStart - 1 : 0];

        if (selectionStart === 2 && data !== null && value[0] === ' ') {
            return {
                maskedValue: value.trim().replace(/\s{3}/g, '  '),
                selectionStart: selectionStart - 1
            };
        }
        if (selectionStart === 0 && data === null) {
            return {
                maskedValue: `${value.slice(0, selectionStart)} ${value.slice(selectionStart)}`.replace(/\s{3}/g, '  '),
                selectionStart: selectionStart + 1
            };
        } else if (cursorText === ' ' && data === null) {
            const postCursorText = value[selectionStart];
            const updatedText = `${value.slice(0, selectionStart)} ${value.slice(selectionStart)}`;
            return {
                maskedValue: postCursorText === ' ' ? updatedText.replace(/\s{3}/g, '  ') : updatedText,
                selectionStart: postCursorText === ' ' ? selectionStart : selectionStart + 1
            };
        } else if (cursorText === ' ' && data !== null) {
            return {
                maskedValue: value.replace(/\s{3}/g, '  '),
                selectionStart
            };
        } else if (cursorText !== ' ' && data === null) {
            return {
                maskedValue: `${value.slice(0, selectionStart)} ${value.slice(selectionStart)}`.replace(/\s{3}/g, '  '),
                selectionStart: selectionStart
            };
        } else {
            return {
                maskedValue: value.replace(/\s{3}/g, '  '),
                selectionStart
            };
        }
    } else {
        maskedValue = value
            .replace(specialCharsRegex, '')
            .split('')
            .reduce((acc: string, c: string) => applyMasking(acc + c, mask, selectionStart ?? 0, data), '');
        return { maskedValue, selectionStart: maskedValue.length };
    }
};

export default getMaskedValue;
