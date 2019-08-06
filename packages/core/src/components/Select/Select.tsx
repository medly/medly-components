import { WithStyle } from '@medly-components/utils';
import React, { useEffect, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import { Popover, PopoverWrapper } from '../Popover';
import { filterOptions, getDefaultSelected, getOptionsWithSelected } from './helpers';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './Select.styled';
import { Option, SelectProps } from './types';

const Select: React.SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, label, placeholder, labelPosition, required, fullWidth } = props,
            defaultSelectedOption = getDefaultSelected(props.options, props.defaultSelected);

        const [inputValue, setInputValue] = useState(defaultSelectedOption.label),
            [selectedOption, setSelectedOption] = useState(defaultSelectedOption),
            [options, setOptions] = useState(getOptionsWithSelected(props.options, defaultSelectedOption));

        useEffect(() => {
            const selected = getDefaultSelected(props.options, props.defaultSelected);
            setInputValue(selected.label);
            setSelectedOption(selected);
            setOptions(getOptionsWithSelected(props.options, selected));
        }, [props.options, props.defaultSelected]);

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
                setInputValue(option.label);
                setSelectedOption(option);
                setOptions(getOptionsWithSelected(props.options, option));
                props.onChange && props.onChange(option.value);
            },
            handleOuterClick = () => {
                updateToDefaultOptions();
                setInputValue(selectedOption.label);
            };

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition }} onClick={handleWrapperClick}>
                        <Input
                            type="text"
                            required={required}
                            data-testid="select-input"
                            placeholder={placeholder}
                            value={inputValue}
                            onClick={handleInputClick}
                            ref={ref}
                            onChange={handleInputChange}
                        />
                        <SelectIconStyled size="XS" />
                    </SelectWrapperStyled>
                    <Popover fullWidth>
                        <Options options={options} onOptionClick={handleOptionClick} />
                    </Popover>
                </PopoverWrapper>
                {description && <FieldWithLabel.Description>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

Select.displayName = 'Select';
Select.Style = SelectWrapperStyled;
Select.defaultProps = {
    labelPosition: 'left',
    defaultSelected: '',
    fullWidth: false,
    required: false,
    label: '',
    description: '',
    placeholder: 'Please Select . . .'
};

export default Select;
