import React from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { ColumnConfig } from '../types';
import { createOptions, createValues, updateColumns, updateConfig } from './helpers';
import { Props } from './types';

const ColumnConfiguration: React.SFC<Props> = React.memo(({ columns, onChange }) => {
    const handleCheckboxClick = (field: string) => () => onChange(updateConfig(columns, field)),
        handleCheckboxGroupClick = (fields: string[]) => onChange(updateColumns(columns, fields));

    const checkBoxes = (configs: ColumnConfig[]) =>
        configs.map(config =>
            config.children ? (
                <CheckboxGroup
                    showSelectAll
                    key={config.field}
                    label={config.title}
                    labelPosition="top"
                    labelWeight="Strong"
                    values={createValues(config.children, config.field)}
                    onChange={handleCheckboxGroupClick}
                    options={createOptions(config.children, config.field)}
                />
            ) : (
                <Checkbox key={config.field} label={config.title} checked={config.hide} onChange={handleCheckboxClick(config.field)} />
            )
        );

    return <>{checkBoxes(columns)}</>;
});

export default ColumnConfiguration;
