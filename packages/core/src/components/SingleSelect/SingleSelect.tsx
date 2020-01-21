import { useCombinedRefs, useKeyPress, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useRef, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import { Popover, PopoverWrapper } from '../Popover';
import { filterOptions, getDefaultSelectedOption, getNextOption, getOptionsWithSelected, getPrevOption } from './helpers';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './SingleSelect.styled';
import { Option, SelectProps } from './types';

export const SingleSelect: SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, descriptionColor, label, placeholder, labelPosition, minWidth, required, fullWidth, disabled } = props,
            id = props.id || 'medly-singleSelect',
            defaultSelectedOption = getDefaultSelectedOption(props.options, props.value);

        const popoverRef = useRef(null),
            innerRef = React.useRef(null),
            inputRef = useCombinedRefs<HTMLInputElement>(ref, innerRef),
            downPress = useKeyPress('ArrowDown'),
            upPress = useKeyPress('ArrowUp'),
            enterPress = useKeyPress('Enter'),
            [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [areOptionsVisible, setOptionsVisibilityState] = useState(false),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [options, setOptions] = useState(getOptionsWithSelected(props.options, defaultSelectedOption));

        const updateToDefaultOptions = useCallback(() => setOptions(getOptionsWithSelected(props.options, selectedOption)), [
            props.options,
            selectedOption
        ]);

        const showOptions = useCallback(() => setOptionsVisibilityState(true), []),
            hideOptions = useCallback(() => setOptionsVisibilityState(false), []),
            handleInputClick = useCallback(
                (e: React.MouseEvent<HTMLInputElement>) => {
                    // @ts-ignore
                    e.target.setSelectionRange(inputValue.length, inputValue.length);
                },
                [inputValue]
            ),
            handleInputChange = useCallback(
                ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(value);
                    const newOptions = filterOptions(getOptionsWithSelected(props.options, selectedOption), value);
                    newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
                },
                [props.options, selectedOption, updateToDefaultOptions]
            ),
            selectOption = useCallback(
                (option: Option) => {
                    setSelectedOption(option);
                    setOptions(getOptionsWithSelected(options, option));
                },
                [options]
            ),
            handleOptionClick = useCallback(
                (option: Option) => {
                    if (!option.disabled) {
                        selectOption(option);
                        setInputValue(option.label);
                        inputRef.current.blur();
                        hideOptions();
                        props.onChange && props.onChange(option.value);
                    }
                },
                [inputRef.current, props.onChange]
            ),
            handleOuterClick = useCallback(() => {
                if (areOptionsVisible) {
                    hideOptions();
                    updateToDefaultOptions();
                    setInputValue(selectedOption.label);
                }
            }, [areOptionsVisible, selectedOption, updateToDefaultOptions]);

        useEffect(() => {
            const selected = getDefaultSelectedOption(props.options, props.value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(props.options, selected));
        }, [props.options, props.value]);

        useEffect(() => {
            if (downPress && popoverRef.current.style.display === 'block') {
                selectOption(getNextOption(selectedOption, options));
            }
        }, [downPress]);

        useEffect(() => {
            if (upPress && popoverRef.current.style.display === 'block') {
                selectOption(getPrevOption(selectedOption, options));
            }
        }, [upPress]);

        useEffect(() => {
            if (enterPress && popoverRef.current.style.display === 'block') {
                options.length > 0 && options.find(({ value }) => selectedOption.value === value) && handleOptionClick(selectedOption);
            }
        }, [enterPress]);

        return (
            <FieldWithLabel id={`${id}-field`} {...{ fullWidth, labelPosition, minWidth }}>
                {label && (
                    <FieldWithLabel.Label {...{ required, labelPosition }} htmlFor={id}>
                        {label}
                    </FieldWithLabel.Label>
                )}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick} showPopover={areOptionsVisible}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition, disabled }} onClick={showOptions}>
                        <Input
                            autoComplete="off"
                            id={`${id}-input`}
                            disabled={disabled}
                            required={required}
                            placeholder={placeholder}
                            value={inputValue}
                            onFocus={showOptions}
                            onClick={handleInputClick}
                            ref={inputRef}
                            onChange={handleInputChange}
                        />
                        <SelectIconStyled onClick={showOptions} />
                    </SelectWrapperStyled>

                    <Popover fullWidth ref={popoverRef}>
                        {!disabled && <Options id={`${id}-options`} options={options} onOptionClick={handleOptionClick} />}
                    </Popover>
                </PopoverWrapper>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

SingleSelect.displayName = 'SingleSelect';
SingleSelect.Style = SelectWrapperStyled;
SingleSelect.defaultProps = {
    labelPosition: 'left',
    value: '',
    fullWidth: false,
    required: false,
    label: '',
    description: '',
    placeholder: 'Please Select . . .'
};
