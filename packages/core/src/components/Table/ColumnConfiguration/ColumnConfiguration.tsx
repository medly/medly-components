import React from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { TableColumnConfig } from '../types';
import { createOptions, createValues, updateColumns, updateConfig } from './helpers';
import { Props } from './types';

const ColumnConfiguration: React.FC<Props> = React.memo(({ columns, onChange }) => {
    const handleCheckboxClick = (fieldName: string) => () => onChange(updateConfig(columns, fieldName)),
        handleCheckboxGroupClick = (fieldName: string) => (fields: string[]) => {
            const newColumns = [...columns],
                index = columns.findIndex(({ field }) => field === fieldName);
            newColumns.splice(index, 1, updateColumns([columns[index]], fields)[0]);
            onChange(newColumns);
        };

    const checkBoxes = (configs: TableColumnConfig[]) =>
        configs.map(config =>
            config.children ? (
                <CheckboxGroup
                    fullWidth
                    showSelectAll
                    key={config.field}
                    label={config.title}
                    labelWeight="Strong"
                    values={createValues(config.children, config.field)}
                    onChange={handleCheckboxGroupClick(config.field)}
                    options={createOptions(config.children, config.field)}
                />
            ) : (
                <Checkbox
                    fullWidth
                    key={config.field}
                    label={config.title}
                    checked={config.hidden}
                    onChange={handleCheckboxClick(config.field)}
                />
            )
        );

    return <>{checkBoxes(columns)}</>;
});
ColumnConfiguration.displayName = 'ColumnConfiguration';
export default ColumnConfiguration;
