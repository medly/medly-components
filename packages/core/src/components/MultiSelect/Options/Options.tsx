import { WithStyle } from '@medly-components/utils';
import { FC, Fragment, memo, useCallback, useMemo } from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../../CheckboxGroup';
import OptionComponent from '../../SingleSelect/Options/Option';
import { Option } from '../types';
import Chip from './Chip';
import * as Styled from './Options.styled';
import { OptionsProps } from './types';

const Component: FC<OptionsProps> = memo(props => {
    const { id, inputValue, values, size, setValues, options, onOptionClick, isCreatable } = props;

    const showCreatableOption =
        isCreatable &&
        inputValue?.length &&
        !options.some(({ value }) => value.includes(inputValue)) &&
        !values.some(({ value }) => value === inputValue);

    const selectedValues = useMemo(() => values.map(op => op.value), [values]),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleGroupClick = (options: Option[]) => (values: any[]) => {
            const newValues = new Set(selectedValues);
            options.forEach(op => (values.includes(op.value) ? newValues.add(op.value) : newValues.delete(op.value)));
            onOptionClick(Array.from(newValues));
        },
        handleCheckboxClick = useCallback(
            (item: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
                const isChecked = event.target.checked,
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
        ),
        handleCreatableOptionClick = useCallback(() => {
            onOptionClick([...selectedValues, inputValue]);
            setValues && setValues([...selectedValues, { label: inputValue, value: inputValue, creatable: true }]);
        }, [selectedValues, onOptionClick, inputValue, setValues]);

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
            {showCreatableOption ? (
                <Styled.Options id={`${id}-options`} onClick={stopPropagation} size={size}>
                    <OptionComponent
                        value={inputValue}
                        label={`Create "${inputValue}"`}
                        variant="filled"
                        onClick={handleCreatableOptionClick}
                        size={size}
                    />
                </Styled.Options>
            ) : (
                <Styled.Options id={`${id}-options`} onClick={stopPropagation} size={size}>
                    {options.map((op, index) => (
                        <Fragment key={index}>
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
                                <Checkbox
                                    {...op}
                                    name={op.value}
                                    checked={selectedValues.includes(op.value)}
                                    onChange={handleCheckboxClick(op.value)}
                                />
                            )}
                        </Fragment>
                    ))}
                </Styled.Options>
            )}
        </Styled.OptionsWrapper>
    );
});
Component.displayName = 'Options';
const Options: FC<OptionsProps> & WithStyle = Object.assign(Component, { Style: Styled.Options });

export default Options;
