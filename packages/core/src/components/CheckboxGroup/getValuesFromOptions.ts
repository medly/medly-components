import { CheckboxGroupProps } from './types';

const getValuesFromOptions = (options: CheckboxGroupProps['options']): string[] =>
    options.reduce((acc, curr) => [...acc, ...(Array.isArray(curr.value) ? getValuesFromOptions(curr.value) : [curr.value])], []);

export default getValuesFromOptions;
