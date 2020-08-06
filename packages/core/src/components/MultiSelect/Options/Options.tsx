import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo } from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import { Chip } from '../Chip/Chip';
import { Option } from '../types';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Options: React.FC<OptionsProps> & WithStyle = React.memo(props => {
    const selectedValues = useMemo(() => props.values.map(op => op.value), [props.values]);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleGroupClick = (options: Option[]) => (values: any[]) => {
            const newValues = new Set(selectedValues);
            options.forEach(op => (values.includes(op.value) ? newValues.add(op.value) : newValues.delete(op.value)));
            props.onOptionClick(Array.from(newValues));
        },
        handleCheckboxClick = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const item = event.target.name,
                    isChecked = event.target.checked,
                    newValues = isChecked ? [...selectedValues, item] : selectedValues.filter(vl => vl !== item);
                props.onOptionClick(newValues);
            },
            [selectedValues, props.onOptionClick]
        ),
        handleClearHandler = useCallback(
            value => {
                const newValues = selectedValues.filter(vl => vl !== value);
                props.onOptionClick(newValues);
            },
            [selectedValues, props.onOptionClick]
        );

    return (
        <Styled.OptionsWrapper>
            <Styled.ChipArea>
                {selectedValues.length === 0 && <p>-</p>}
                {selectedValues.map((value, index) => {
                    return <Chip key={index} label={value} testId={`${value}`} onClear={handleClearHandler} />;
                })}
            </Styled.ChipArea>
            <Styled.Options id={props.id} onClick={stopPropagation}>
                {props.options.map((op, index) => (
                    <React.Fragment key={index}>
                        {!Array.isArray(op.value) && (
                            <Checkbox {...op} checked={selectedValues.includes(op.value)} name={op.value} onChange={handleCheckboxClick} />
                        )}
                        {Array.isArray(op.value) && (
                            <CheckboxGroup
                                values={selectedValues.filter(vl => op.value.map((nestedOp: Option) => nestedOp.value).includes(vl))}
                                showSelectAll
                                disabled={op.disabled}
                                label={op.label}
                                options={op.value}
                                onChange={handleGroupClick(op.value)}
                                fullWidthOptions={true}
                            />
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
