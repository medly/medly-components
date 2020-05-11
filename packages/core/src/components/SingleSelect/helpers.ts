import { includesIgnoreCase } from '@medly-components/utils';
import { DefaultSelected, Option } from './types';

export const getDefaultSelectedOption = (options: Option[], defaultSelected: any): Option => {
    for (const option of options) {
        if (Array.isArray(option.value)) {
            const nestedSelected = getDefaultSelectedOption(option.value, defaultSelected);
            if (nestedSelected.value) return nestedSelected;
        } else if (defaultSelected === option.value) return option;
    }
    return {
        value: '',
        label: ''
    };
};

export const getOptionsWithSelected = (options: Option[], selected: DefaultSelected | Option): Option[] =>
    options.map(option => {
        if (Array.isArray(option.value)) {
            const value = getOptionsWithSelected(option.value, selected);
            return {
                ...option,
                value,
                selected: option.label === selected.label || value.some(op => op.selected)
            };
        }
        return {
            ...option,
            selected: (Array.isArray(selected.value) && selected.label === option.label) || selected.value === option.value
        };
    });

export const filterOptions = (options: Option[], str: string): Option[] =>
    options.filter(op => {
        return includesIgnoreCase(op.label, str) || (Array.isArray(op.value) && filterOptions(op.value, str).length);
    });

export const getNextOption = (selectedOption: Option, options: Option[]) => {
    const currIndex = options.findIndex(op => op.label === selectedOption.label);

    if (currIndex === -1) return options[0];

    let nextIndex = currIndex === options.length - 1 ? 0 : currIndex + 1;

    if (options[nextIndex].disabled) {
        nextIndex = nextIndex === options.length - 1 ? 0 : nextIndex + 1;
    }
    return options[nextIndex];
};

export const getPrevOption = (selectedOption: Option, options: Option[]) => {
    const currIndex = options.findIndex(op => op.label === selectedOption.label);

    if (currIndex === -1) return options[options.length - 1];

    let nextIndex = currIndex === 0 ? options.length - 1 : currIndex - 1;

    if (options[nextIndex].disabled) {
        nextIndex = nextIndex === 0 ? options.length - 1 : nextIndex - 1;
    }
    return options[nextIndex];
};
