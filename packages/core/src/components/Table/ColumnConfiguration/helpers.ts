import { TableColumnConfig } from '../types';

export const createValues = (columns: TableColumnConfig[], field = ''): string[] =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field;
        return [...acc, ...(curr.children ? createValues(curr.children, dottedField) : curr.hidden ? [dottedField] : [])];
    }, [] as string[]);

export const createOptions = (columns: TableColumnConfig[], field = ''): any =>
    columns.map(config => {
        const dottedField = field ? `${field}.${config.field}` : config.field;
        return {
            label: config.title,
            value: config.children ? createOptions(config.children, dottedField) : dottedField
        };
    });

export const updateConfig = (configs: TableColumnConfig[], field: string) =>
    configs.map(config => ({ ...config, hidden: config.field === field ? !config.hidden : config.hidden }));

export const updateColumns = (columns: TableColumnConfig[], selectedValues: string[], field = ''): TableColumnConfig[] =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field,
            children = curr.children ? updateColumns(curr.children, selectedValues, dottedField) : undefined,
            hidden = children ? children.every((child: TableColumnConfig) => child.hidden) : selectedValues.includes(dottedField);

        return [
            ...acc,
            {
                ...curr,
                hidden,
                children
            }
        ];
    }, [] as TableColumnConfig[]);
