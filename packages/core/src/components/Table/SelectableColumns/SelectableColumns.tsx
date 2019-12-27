import React, { useCallback } from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { ColumnConfig } from '../types';
import changeFieldValue from './changeFieldValue';
import { Props } from './types';

const TableSelectableColumns: React.SFC<Props> = React.memo(({ columns, fieldToChange, onChange }) => {
    const handleCheckboxClick = useCallback(
        (field: string, state: boolean) => () => onChange(changeFieldValue(field, columns, state, fieldToChange)),
        [columns, fieldToChange, onChange]
    );

    const handleCheckboxGroupClick = (field: string) => (fields: string[]) => {
        const columnConfigOfSelectedGroup = columns.find(cc => cc.field === field);

        let newConfig = columnConfigOfSelectedGroup.children.reduce(
            (acc: ColumnConfig[], curr: ColumnConfig) => {
                return changeFieldValue(`${field}.${curr.field}`, acc, fields.includes(curr.field), fieldToChange);
            },
            [...columns]
        );
        newConfig = changeFieldValue(field, newConfig, fields.length === columnConfigOfSelectedGroup.children.length, fieldToChange);
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
                    labelWeight="Strong"
                    values={config.children.reduce((acc, curr) => {
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
});

export default TableSelectableColumns;
