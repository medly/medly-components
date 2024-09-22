const applyMasking = (value: string, mask: string, selectionStart: number, data: string | null): string => {
    const { length } = value,
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
        const initialMask = mask.match(alphaNumericRegex)?.index,
            remainingMask = mask.substr(length),
            numberIndex = remainingMask.match(alphaNumericRegex)?.index;

        newValue =
            initialMask && !specialCharsRegex.test(value[0])
                ? mask.slice(0, initialMask) + value + remainingMask.substr(0, numberIndex)
                : value + remainingMask.substr(0, numberIndex);
    }

    return newValue;
};

const fixSpaces = (value: string): string => value.replace(/\s{3}/g, '  ').replace(/(\d)\s(\d)/g, '$1$2');

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
                maskedValue: value
                    .trim()
                    .replace(/\s{3}/g, '  ')
                    .replace(/(\d)\s(\d)/g, '$1$2'),
                selectionStart: selectionStart - 1
            };
        }
        if (selectionStart === 0 && data === null) {
            return {
                maskedValue: fixSpaces(specialCharsRegex.test(mask.charAt(0)) ? `${mask.charAt(0)}${value.slice(selectionStart)}` : value),
                selectionStart
            };
        } else if (cursorText === ' ' && data === null) {
            const postCursorText = value[selectionStart];
            const updatedText = fixSpaces(
                specialCharsRegex.test(mask.charAt(selectionStart))
                    ? `${value.slice(0, selectionStart)}${mask.charAt(selectionStart)}${value.slice(selectionStart)}`
                    : value
            );
            return {
                maskedValue: postCursorText === ' ' ? fixSpaces(updatedText) : updatedText.replace(/(\d)\s(\d)/g, '$1$2'),
                selectionStart
            };
        } else if (cursorText === ' ' && data !== null) {
            return {
                maskedValue: fixSpaces(value),
                selectionStart
            };
        } else if (cursorText !== ' ' && data === null) {
            return {
                maskedValue: fixSpaces(
                    specialCharsRegex.test(mask.charAt(selectionStart))
                        ? `${value.slice(0, selectionStart)}${mask.charAt(selectionStart)}${value.slice(selectionStart)}`
                        : value
                ),
                selectionStart
            };
        } else {
            return {
                maskedValue: fixSpaces(value),
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
