const applyMasking = (value: string, mask: string, selectionStart: number): string => {
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

    if (selectionStart !== null && selectionStart < value.length && value.length !== mask.length) {
        maskedValue =
            data === null
                ? `${value.slice(0, selectionStart)} ${value.slice(selectionStart)}`
                : value[selectionStart] === ' '
                ? `${value.slice(0, selectionStart - 1)}${data}${value.slice(selectionStart + 1)}`
                : `${value.slice(0, selectionStart)}${data}${value.slice(selectionStart)}`;
        return { maskedValue, selectionStart: specialCharsRegex.test(value[selectionStart]) ? selectionStart : selectionStart + 1 };
    } else {
        maskedValue = value
            .replace(specialCharsRegex, '')
            .split('')
            .reduce((acc: string, c: string) => applyMasking(acc + c, mask, selectionStart ?? 0), '');
        return { maskedValue, selectionStart: maskedValue.length };
    }
};

export default getMaskedValue;
