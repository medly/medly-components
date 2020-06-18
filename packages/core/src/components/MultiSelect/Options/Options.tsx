import { WithStyle } from '@medly-components/utils';
import React, { useCallback, useMemo } from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import Text from '../../Text';
import { Option } from '../types';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Options: React.FC<OptionsProps> & WithStyle = React.memo(props => {
    const selectedValues = useMemo(() => props.values.map(op => op.value), [props.values]);

    const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleTextClick = (value: any) => () => {
            const newValues = selectedValues.includes(value) ? selectedValues.filter(vl => vl !== value) : [...selectedValues, value];
            props.onOptionClick(newValues);
        },
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
        );

    return (
        <Styled.Options onClick={stopPropagation}>
            {props.options.map((op, index) => (
                <React.Fragment key={index}>
                    {props.showCheckbox && !Array.isArray(op.value) && (
                        <Checkbox {...op} checked={selectedValues.includes(op.value)} name={op.value} onChange={handleCheckboxClick} />
                    )}
                    {props.showCheckbox && Array.isArray(op.value) && (
                        <CheckboxGroup
                            values={selectedValues.filter(vl => op.value.map((nestedOp: Option) => nestedOp.value).includes(vl))}
                            showSelectAll
                            disabled={op.disabled}
                            label={op.label}
                            options={op.value}
                            onChange={handleGroupClick(op.value)}
                        />
                    )}
                    {!props.showCheckbox && !Array.isArray(op.value) && (
                        <Styled.Option {...op} selected={selectedValues.includes(op.value)} onClick={handleTextClick(op.value)}>
                            <Text>{op.label}</Text>
                        </Styled.Option>
                    )}
                    {!props.showCheckbox && Array.isArray(op.value) && (
                        <>
                            <Styled.Option {...op}>
                                <Text textWeight="Strong">{op.label}</Text>
                            </Styled.Option>
                            {op.value.map((nestedOp, i) => (
                                <Styled.Option
                                    key={i}
                                    isChild
                                    {...nestedOp}
                                    selected={selectedValues.includes(nestedOp.value)}
                                    onClick={handleTextClick(nestedOp.value)}
                                >
                                    <Text>{nestedOp.label}</Text>
                                </Styled.Option>
                            ))}
                        </>
                    )}
                </React.Fragment>
            ))}
        </Styled.Options>
    );
});
Options.displayName = 'Options';
Options.Style = Styled.Options;

export default Options;
