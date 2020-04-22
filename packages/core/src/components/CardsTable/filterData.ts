import { Data, SortOrder } from './types';

// @ts-ignore
const getNestedValue = (obj: {}, dottedKey: string) => dottedKey.split('.').reduce((acc, curr) => acc[curr], obj);

export const filterData = (dottedField: string, order: SortOrder, tableData: Data[], setTableData: any) => {
    const newArray = [...tableData];
    newArray.sort((first, second) => {
        const firstField = getNestedValue(first, dottedField);
        const secondField = getNestedValue(second, dottedField);
        const comparison = firstField > secondField ? 1 : firstField < secondField ? -1 : 0;
        return order === 'asc' ? comparison : comparison * -1;
    });
    setTableData(newArray);
};
