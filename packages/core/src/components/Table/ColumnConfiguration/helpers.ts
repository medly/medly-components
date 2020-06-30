import { ColumnConfig } from '../types';

export const createValues = (columns: ColumnConfig[], field = ''): string[] =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field;
        return [...acc, ...(curr.children ? createValues(curr.children, dottedField) : curr.hidden ? [dottedField] : [])];
    }, []);

export const createOptions = (columns: ColumnConfig[], field = ''): any =>
    columns.map(config => {
        const dottedField = field ? `${field}.${config.field}` : config.field;
        return {
            label: config.title,
            value: config.children ? createOptions(config.children, dottedField) : dottedField
        };
    });

export const updateConfig = (configs: ColumnConfig[], field: string) =>
    configs.map(config => ({ ...config, hidden: config.field === field ? !config.hidden : config.hidden }));

export const updateColumns = (columns: ColumnConfig[], selectedValues: string[], field = ''): any =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field,
            children = curr.children ? updateColumns(curr.children, selectedValues, dottedField) : undefined,
            hidden = children ? children.every((child: ColumnConfig) => child.hidden) : selectedValues.includes(dottedField);

        return [
            ...acc,
            {
                ...curr,
                hidden,
                children
            }
        ];
    }, []);
