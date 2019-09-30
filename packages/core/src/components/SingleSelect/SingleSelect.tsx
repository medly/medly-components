import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import { Popover, PopoverWrapper } from '../Popover';
import { filterOptions, getDefaultSelectedOption, getOptionsWithSelected } from './helpers';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './SingleSelect.styled';
import { Option, SelectProps } from './types';

const SingleSelect: React.SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, description, label, placeholder, labelPosition, minWidth, required, fullWidth, disabled } = props,
            defaultSelectedOption = getDefaultSelectedOption(props.options, props.defaultValue);

        const [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [options, setOptions] = useState(getOptionsWithSelected(props.options, defaultSelectedOption));

        useEffect(() => {
            const selected = getDefaultSelectedOption(props.options, props.defaultValue);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(props.options, selected));
        }, [props.options, props.defaultValue]);

        const updateToDefaultOptions = () => setOptions(getOptionsWithSelected(props.options, selectedOption));

        const handleWrapperClick = () => {
                setInputValue(selectedOption.label);
                updateToDefaultOptions();
            },
            handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
                // @ts-ignore
                e.target.setSelectionRange(inputValue.length, inputValue.length);
            },
            handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(value);
                const newOptions = filterOptions(options, value);
                newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
            },
            handleOptionClick = (option: Option) => () => {
                if (option.value !== selectedOption.value) {
                    setInputValue(option.label);
                    setSelectedOption(option);
                    setOptions(getOptionsWithSelected(props.options, option));
                    props.onChange && props.onChange(option.value);
                }
            },
            handleOuterClick = () => {
                updateToDefaultOptions();
                setInputValue(selectedOption.label);
            };

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition, minWidth }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition, disabled }} onClick={handleWrapperClick}>
                        <Input
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
                    <Popover fullWidth>{!disabled && <Options options={options} onOptionClick={handleOptionClick} />}</Popover>
                </PopoverWrapper>
                {description && <FieldWithLabel.Description>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

SingleSelect.displayName = 'SingleSelect';
SingleSelect.Style = SelectWrapperStyled;
SingleSelect.defaultProps = {
    labelPosition: 'left',
    defaultValue: '',
    fullWidth: false,
    required: false,
    label: '',
    description: '',
    placeholder: 'Please Select . . .'
};

export default SingleSelect;
