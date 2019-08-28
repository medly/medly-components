import React from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { ColumnConfig } from '../types';
import { Props } from './types';

const TableSelectableColumns: React.SFC<Props> = ({ columns, fieldToChange, onChange }) => {
    const changeFieldValue = (dottedField: string, configs: ColumnConfig[], state = false): ColumnConfig[] => {
        return configs.map(config => {
            if (!dottedField.includes('.') && config.field === dottedField) return { ...config, [fieldToChange]: state };
            if (config.field === dottedField.split('.')[0] && config.children) {
                return {
                    ...config,
                    children: changeFieldValue(dottedField.substring(dottedField.indexOf('.') + 1), config.children, state)
                };
            }
            return config;
        });
    };

    const handleCheckboxClick = (field: string, state: boolean) => () => {
        const newConfig = changeFieldValue(field, columns, state);
        onChange(newConfig);
    };

    const handleCheckboxGroupClick = (field: string) => (fields: string[]) => {
        const columnConfigOfSelectedGroup = columns.find(cc => cc.field === field);

        let newConfig = columnConfigOfSelectedGroup.children.reduce(
            (acc: ColumnConfig[], curr: ColumnConfig) => {
                return changeFieldValue(`${field}.${curr.field}`, acc, fields.includes(curr.field));
            },
            [...columns]
        );

        if (fields.length === columnConfigOfSelectedGroup.children.length) {
            newConfig = changeFieldValue(field, newConfig, true);
        }
        if (fields.length === 0) {
            newConfig = changeFieldValue(field, newConfig, false);
        }

        onChange(newConfig);
    };
    const checkBoxes = (configs: ColumnConfig[], field: string = '') =>
        configs.map(config => {
            const dottedField = field ? `${field}.${config.field}` : config.field;
            if (!config.children) {
                return (
                    <Checkbox
                        key={dottedField}
                        label={config.title}
                        checked={config.hide}
                        onChange={handleCheckboxClick(dottedField, !config.hide)}
                    />
                );
            }

            return (
                <CheckboxGroup
                    showSelectAll
                    key={dottedField}
                    label={config.title}
                    labelPosition="top"
                    value={config.children.reduce((acc, curr) => {
                        curr.hide && acc.push(`${curr.field}`);
                        return acc;
                    }, [])}
                    onChange={handleCheckboxGroupClick(dottedField)}
                    options={config.children.map((child: ColumnConfig) => ({
                        label: child.title,
                        value: `${child.field}`
                    }))}
                />
            );
        });

    return <>{checkBoxes(columns)}</>;
};

export default TableSelectableColumns;
