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
    const {
        id,
        inputValue,
        values,
        size,
        options,
        cursor,
        setIsParentCursorEnabled,
        onOptionClick,
        showCreatableOption,
        handleCreatableOptionClick
    } = props;

    const selectedValues = useMemo(() => values.map(op => op.value), [values]),
        stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []),
        handleGroupClick = (options: Option[]) => (values: any[]) => {
            const newValues = new Set(selectedValues);
            options.forEach(op => (values.includes(op.value) ? newValues.add(op.value) : newValues.delete(op.value)));
            onOptionClick(Array.from(newValues));
        },
        handleOptionSelection = useCallback(
            (item: any) => (isChecked: boolean) => {
                const newValues = isChecked ? [...selectedValues, item] : selectedValues.filter(vl => vl !== item);
                onOptionClick(newValues);
            },
            [selectedValues, onOptionClick]
        ),
        handleCheckboxClick = useCallback(
            (item: any) => (event: React.ChangeEvent<HTMLInputElement>) => handleOptionSelection(item)(event.target.checked),
            [handleOptionSelection]
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
            {showCreatableOption ? (
                <Styled.Options id={`${id}-options`} onClick={stopPropagation} size={size}>
                    <OptionComponent
                        value={inputValue}
                        label={`Create "${inputValue}"`}
                        variant="filled"
                        onClick={handleCreatableOptionClick!}
                        size={size}
                        hovered
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
                                    isHovered={cursor === index}
                                    setIsHovered={setIsParentCursorEnabled}
                                    onChange={handleGroupClick(op.value)}
                                    fullWidthOptions={true}
                                />
                            ) : (
                                <Checkbox
                                    {...op}
                                    name={op.value}
                                    checked={selectedValues.includes(op.value)}
                                    isHovered={cursor === index}
                                    onChange={handleCheckboxClick(op.value)}
                                    onSelectionFromKeyboard={handleOptionSelection(op.value)}
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
