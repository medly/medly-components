import { Props } from './types';

const getValuesFromOptions = (options: Props['options']): string[] =>
    options.reduce((acc, curr) => [...acc, ...(Array.isArray(curr.value) ? getValuesFromOptions(curr.value) : [curr.value])], []);

export default getValuesFromOptions;
