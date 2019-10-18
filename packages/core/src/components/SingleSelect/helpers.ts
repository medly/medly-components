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
