import React from 'react';

const getMaskedValue = (event: React.ChangeEvent<HTMLInputElement>, mask: string): string => {
    const value = event.target.value,
        alphaNumericRegex = /[a-zA-Z0-9]/,
        specialCharsRegex = /[^a-zA-Z0-9]/,
        length = value.length,
        lastChar = value[length - 1];

    let newValue;

    // if user deletes some char from middle
    if (event.target.selectionStart && event.target.selectionStart < length) {
        newValue = value.slice(0, event.target.selectionStart);
    } else if (length > mask.length || /[a-zA-Z]/.test(lastChar)) {
        // if user types more char then mask length
        newValue = value.slice(0, -1);
    } else if (specialCharsRegex.test(value[length - 1])) {
        // if user deletes till the special character
        newValue = value.replace(/((?=([^a-zA-Z0-9]+))\2)+$/, '');
    } else if (specialCharsRegex.test(mask[length - 1])) {
        // if user reaches to special character
        const remainingMask = mask.substr(length - 1),
            numberIndex = remainingMask.match(alphaNumericRegex)?.index;

        newValue = value.slice(0, -1) + remainingMask.substr(0, numberIndex) + value.slice(-1);
    } else {
        const remainingMask = mask.substr(length),
            numberIndex = remainingMask.match(alphaNumericRegex)?.index;

        newValue = value + remainingMask.substr(0, numberIndex);
    }

    return newValue;
};

export default getMaskedValue;
