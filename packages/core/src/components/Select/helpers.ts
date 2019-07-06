import { equalsIgnoreCase, includesIgnoreCase } from '@medly-components/utils';
import { DefaultSelected, Option, SelectProps } from './types';

export const getDefaultSelected = (options: SelectProps['options'], defaultSelected: string) =>
    options.find(option => equalsIgnoreCase(defaultSelected, option.value) || equalsIgnoreCase(defaultSelected, option.label)) || {
        value: '',
        label: ''
    };

export const getOptionsWithSelected = (options: SelectProps['options'], selected: DefaultSelected | Option) =>
    options.map(option => ({ ...option, selected: selected.value === option.value }));

export const filterOptions = (options: Option[], str: string) => options.filter(op => includesIgnoreCase(op.label, str));
