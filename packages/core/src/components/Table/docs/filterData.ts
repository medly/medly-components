import { getNestedValue } from '../helpers';
import { Data, SortOrder } from '../types';

export const filterData = (dottedField: string, order: SortOrder, tableData: Data) => {
    const newArray = [...tableData];
    newArray.sort((first, second) => {
        const firstField = getNestedValue(first, dottedField);
        const secondField = getNestedValue(second, dottedField);
        const comparison = firstField > secondField ? 1 : firstField < secondField ? -1 : 0;
        return order === 'asc' ? comparison : comparison * -1;
    });
    return newArray;
};
