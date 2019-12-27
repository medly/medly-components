import { useKeyPress, WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useRef, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import { Popover, PopoverWrapper } from '../Popover';
import { filterOptions, findNextOption, findPrevOption, getDefaultSelectedOption, getOptionsWithSelected } from './helpers';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './SingleSelect.styled';
import { Option, SelectProps } from './types';

export const SingleSelect: SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, description, descriptionColor, label, placeholder, labelPosition, minWidth, required, fullWidth, disabled } = props,
            defaultSelectedOption = getDefaultSelectedOption(props.options, props.value);

        const [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [options, setOptions] = useState(getOptionsWithSelected(props.options, defaultSelectedOption)),
            popoverRef = useRef(null),
            downPress = useKeyPress('ArrowDown'),
            upPress = useKeyPress('ArrowUp'),
            enterPress = useKeyPress('Enter');

        const updateToDefaultOptions = useCallback(() => setOptions(getOptionsWithSelected(props.options, selectedOption)), [
            props.options,
            selectedOption
        ]);

        const handleWrapperClick = useCallback(() => {
                setInputValue(selectedOption.label);
                updateToDefaultOptions();
            }, [selectedOption.label, updateToDefaultOptions]),
            handleInputClick = useCallback(
                // @ts-ignore
                (e: React.MouseEvent<HTMLInputElement>) => e.target.setSelectionRange(inputValue.length, inputValue.length),
                [inputValue]
            ),
            handleInputChange = useCallback(
                ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(value);
                    const newOptions = filterOptions(options, value);
                    newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
                },
                [options, updateToDefaultOptions]
            ),
            handleOptionClick = (option: Option) => () => {
                if (option.value !== selectedOption.value && !option.disabled) {
                    setInputValue(option.label);
                    setSelectedOption(option);
                    setOptions(getOptionsWithSelected(props.options, option));
                    props.onChange && props.onChange(option.value);
                }
            },
            handleOuterClick = useCallback(() => {
                updateToDefaultOptions();
                setInputValue(selectedOption.label);
            }, [updateToDefaultOptions, updateToDefaultOptions]);

        useEffect(() => {
            const selected = getDefaultSelectedOption(props.options, props.value);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(props.options, selected));
        }, [props.options, props.value]);

        useEffect(() => {
            if (downPress && popoverRef.current.style.display === 'block') {
                handleOptionClick(findNextOption(selectedOption, options))();
            }
        }, [downPress]);

        useEffect(() => {
            if (upPress && popoverRef.current.style.display === 'block') {
                handleOptionClick(findPrevOption(selectedOption, options))();
            }
        }, [upPress]);

        useEffect(() => {
            if (enterPress && popoverRef.current.style.display === 'block') {
                popoverRef.current.click();
            }
        }, [enterPress]);

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition, minWidth }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition, disabled }} onClick={handleWrapperClick}>
                        <Input
                            autoComplete="off"
                            id={id || 'select-input'}
                            type="text"
                            disabled={disabled}
                            required={required}
                            data-testid="select-input"
                            placeholder={placeholder}
                            value={inputValue}
                            onClick={handleInputClick}
                            ref={ref}
                            onChange={handleInputChange}
                        />
                        <SelectIconStyled />
                    </SelectWrapperStyled>
                    <Popover fullWidth ref={popoverRef}>
                        {!disabled && <Options options={options} onOptionClick={handleOptionClick} />}
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
