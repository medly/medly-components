import { includesIgnoreCase } from '@medly-components/utils';
import { Option } from './types';

export const getDefaultSelectedOptions = (options: Option[], defaultValues: any[]) => {
    let newValues: any[] = [];
    options.forEach(op => {
        if (Array.isArray(op.value)) newValues = [...newValues, ...getDefaultSelectedOptions(op.value, defaultValues)];
        else if (defaultValues.includes(op.value)) newValues.push(op);
    });
    return newValues;
};

export const filterOptions = (options: Option[], str: string) => {
    let newValues: any[] = [];
    options.forEach(op => {
        if (Array.isArray(op.value)) newValues = [...newValues, ...filterOptions(op.value, str)];
        else if (includesIgnoreCase(op.label, str)) newValues.push(op);
    });
    return newValues;
};
