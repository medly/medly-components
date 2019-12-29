import { ColumnConfig } from '../types';

export const createValues = (columns: ColumnConfig[], field: string = ''): string[] =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field;
        return [...acc, ...(curr.children ? createValues(curr.children, dottedField) : curr.hide ? [dottedField] : [])];
    }, []);

export const createOptions = (columns: ColumnConfig[], field: string = ''): any =>
    columns.map(config => {
        const dottedField = field ? `${field}.${config.field}` : config.field;
        return {
            label: config.title,
            value: config.children ? createOptions(config.children, dottedField) : dottedField
        };
    });

export const updateConfig = (configs: ColumnConfig[], field: string) =>
    configs.map(config => ({ ...config, hide: config.field === field ? !config.hide : config.hide }));

export const updateColumns = (columns: ColumnConfig[], selectedValues: string[], field: string = ''): any =>
    columns.reduce((acc, curr) => {
        const dottedField = field ? `${field}.${curr.field}` : curr.field,
            children = curr.children ? updateColumns(curr.children, selectedValues, dottedField) : undefined,
            hide = children ? children.every((child: ColumnConfig) => child.hide) : selectedValues.includes(dottedField);

        return [
            ...acc,
            {
                ...curr,
                hide,
                children
            }
        ];
    }, []);
