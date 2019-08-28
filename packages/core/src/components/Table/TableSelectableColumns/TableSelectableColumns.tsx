import React from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { ColumnConfig } from '../types';
import { Props } from './types';

const TableSelectableColumns: React.SFC<Props> = ({ columns, fieldToChange, onChange }) => {
    const changeFieldValue = (dottedField: string, configs: ColumnConfig[], state = false): ColumnConfig[] => {
        const fields = dottedField.split('.');
        return configs.map(config => {
            const nextField = fields[1] || '';
            if (config.children) return { ...config, children: changeFieldValue(nextField, config.children, state) };
            return { ...config, [fieldToChange]: config.field === fields[0] ? state : config[fieldToChange] };
        });
    };

    const handleCheckboxClick = (field: string, state: boolean) => () => {
        const newConfig = changeFieldValue(field, columns, state);
        onChange(newConfig);
    };

    const handleCheckboxGroupClick = (field: string) => (fields: string[]) => {
        const columnConfigOfSelectedGroup = columns.find(cc => cc.field === field);
        const newConfig = columnConfigOfSelectedGroup.children.reduce(
            (acc: ColumnConfig[], curr: ColumnConfig) => {
                return changeFieldValue(`${field}.${curr.field}`, acc, fields.includes(curr.field));
            },
            [...columns]
        );

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
