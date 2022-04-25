const applyMasking = (value: string, mask: string): string => {
    const { length } = value,
        lastChar = value[length - 1],
        alphaNumericRegex = /[a-zA-Z0-9]/,
        specialCharsRegex = /[^a-zA-Z0-9]/;

    let newValue;

    if (length > mask.length || /[a-zA-Z]/.test(lastChar)) {
        // if user types more char then mask length
        newValue = value.slice(0, -1);
    } else if (specialCharsRegex.test(mask[length - 1])) {
        // if user reaches to special character
        const remainingMask = mask.substr(length - 1),
            numberIndex = remainingMask.match(alphaNumericRegex)?.index;

        newValue = value.slice(0, -1) + remainingMask.substr(0, numberIndex) + value.slice(-1);
    } else if (specialCharsRegex.test(mask[length])) {
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
    const { value, selectionStart } = event.target;
    let maskedValue;

    if (selectionStart && selectionStart < value.length) {
        maskedValue = value.slice(0, selectionStart);
    } else {
        maskedValue = value
            .replace(/[^a-zA-Z0-9]/g, '') //NOSONAR
            .split('')
            .reduce((acc: string, c: string) => applyMasking(acc + c, mask), '');
    }

    //TODO: Handle the case when the user deletes the character in the middle of the mask
    // const cursorPosition = selectionStart || 0;

    // event.target.value = maskedValue;

    // value.match(/[^a-zA-Z0-9]/) &&
    //     cursorPosition > 0 &&
    //     cursorPosition < maskedValue.length &&
    //     !/[^a-zA-Z0-9]/.test(maskedValue[cursorPosition - 1]) &&
    //     event?.target?.setSelectionRange(cursorPosition, cursorPosition);

    // if (
    //     value.match(/[^a-zA-Z0-9]/) &&
    //     cursorPosition > 0 &&
    //     cursorPosition < maskedValue.length &&
    //     /[^a-zA-Z0-9]/.test(maskedValue[cursorPosition - 1])
    // ) {
    //     const indexOf = maskedValue.substr(cursorPosition - 1).match(/[a-zA-Z0-9]/);
    //     if ((indexOf?.index || 0) > 0) {
    //         const position = (indexOf?.input || '').length === (indexOf?.index || 0) + 1 ? indexOf?.index || 0 : (indexOf?.index || 0) - 1;
    //         event?.target?.setSelectionRange(cursorPosition + position, cursorPosition + position);
    //     }
    // }

    return maskedValue;
};

export default getMaskedValue;
