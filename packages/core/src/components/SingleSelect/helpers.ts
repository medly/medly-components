import { includesIgnoreCase } from '@medly-components/utils';
import { DefaultSelected, Option, SelectProps } from './types';

export const getDefaultSelectedOption = (options: Option[], defaultSelected: any) =>
    options.find(option => defaultSelected === option.value) || {
        value: '',
        label: ''
    };

export const getOptionsWithSelected = (options: Option[], selected: DefaultSelected | Option): Option[] =>
    options.map(option => ({ ...option, selected: selected.value === option.value }));

export const filterOptions = (options: Option[], str: string) => options.filter(op => includesIgnoreCase(op.label, str));

export const getNextOption = (selectedOption: Option, options: Option[]) => {
    const currIndex = options.findIndex(op => op.value === selectedOption.value);

    if (currIndex === -1) return options[0];

    let nextIndex = currIndex === options.length - 1 ? 0 : currIndex + 1;

    if (options[nextIndex].disabled) {
        nextIndex = nextIndex === options.length - 1 ? 0 : nextIndex + 1;
    }
    return options[nextIndex];
};

export const getPrevOption = (selectedOption: Option, options: Option[]) => {
    const currIndex = options.findIndex(op => op.value === selectedOption.value);

    if (currIndex === -1) return options[options.length - 1];

    let nextIndex = currIndex === 0 ? options.length - 1 : currIndex - 1;

    if (options[nextIndex].disabled) {
        nextIndex = nextIndex === 0 ? options.length - 1 : nextIndex - 1;
    }
    return options[nextIndex];
};
