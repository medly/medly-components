import { includesIgnoreCase } from '@medly-components/utils';
import { DefaultSelected, Option, SelectProps } from './types';

export const getDefaultSelected = (options: SelectProps['options'], defaultSelected: any) =>
    options.find(option => defaultSelected === option.value) || {
        value: '',
        label: ''
    };

export const getOptionsWithSelected = (options: SelectProps['options'], selected: DefaultSelected | Option) =>
    options.map(option => ({ ...option, selected: selected.value === option.value }));

export const filterOptions = (options: Option[], str: string) => options.filter(op => includesIgnoreCase(op.label, str));
