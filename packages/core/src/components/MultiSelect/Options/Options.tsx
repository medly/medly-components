import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo } from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { Option } from '../types';
import Chip from './Chip';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Options: React.FC<OptionsProps> & WithStyle = React.memo(props => {
    const { id, values, size, options, onOptionClick } = props;

    const selectedValues = useMemo(() => values.map(op => op.value), [values]),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleGroupClick = (options: Option[]) => (values: any[]) => {
            const newValues = new Set(selectedValues);
            options.forEach(op => (values.includes(op.value) ? newValues.add(op.value) : newValues.delete(op.value)));
            onOptionClick(Array.from(newValues));
        },
        handleCheckboxClick = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const item = event.target.name,
                    isChecked = event.target.checked,
                    newValues = isChecked ? [...selectedValues, item] : selectedValues.filter(vl => vl !== item);
                onOptionClick(newValues);
            },
            [selectedValues, onOptionClick]
        ),
        handleClearHandler = useCallback(
            value => {
                const newValues = selectedValues.filter(vl => vl !== value);
                onOptionClick(newValues);
            },
            [selectedValues, onOptionClick]
        );

    return (
        <Styled.OptionsWrapper size={size} id={`${id}-options-wrapper`} onClick={stopPropagation}>
            <Styled.ChipArea id={`${id}-selected-chips`}>
                {values.length === 0 ? (
                    <p>-</p>
                ) : (
                    values.map(({ value, label, disabled }) => (
                        <Chip
                            id={`${id}-${value}-chip`}
                            key={value}
                            value={value}
                            label={label}
                            disabled={disabled}
                            onClear={handleClearHandler}
                        />
                    ))
                )}
            </Styled.ChipArea>
            <Styled.Options id={`${id}-options`} onClick={stopPropagation} size={size}>
                {options.map((op, index) => (
                    <React.Fragment key={index}>
                        {Array.isArray(op.value) ? (
                            <CheckboxGroup
                                values={selectedValues.filter(vl => op.value.map((nestedOp: Option) => nestedOp.value).includes(vl))}
                                showSelectAll
                                disabled={op.disabled}
                                label={op.label}
                                options={op.value}
                                onChange={handleGroupClick(op.value)}
                                fullWidthOptions={true}
                            />
                        ) : (
                            <Checkbox {...op} checked={selectedValues.includes(op.value)} name={op.value} onChange={handleCheckboxClick} />
                        )}
                    </React.Fragment>
                ))}
            </Styled.Options>
        </Styled.OptionsWrapper>
    );
});
Options.displayName = 'Options';
Options.Style = Styled.Options;

export default Options;
