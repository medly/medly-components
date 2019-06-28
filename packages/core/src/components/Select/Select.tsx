import { equalsIgnoreCase, includesIgnoreCase, WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import Label from '../Label';
import { Popover, PopoverWrapper } from '../Popover';
import Text from '../Text';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './Select.styled';
import { Option, SelectProps } from './types';

const Select: React.SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, label, placeholder, labelPosition, required, fullWidth } = props;
        const defaultSelected = props.options.find(
            option => equalsIgnoreCase(props.defaultSelected, option.value) || equalsIgnoreCase(props.defaultSelected, option.label)
        ) || { value: '', label: '' };
        const [inputValue, setInputValue] = useState(defaultSelected.label);
        const [selectedOption, setSelectedOption] = useState(defaultSelected);
        const [options, setOptions] = useState(
            props.options.map(option => ({ ...option, selected: defaultSelected.value === option.value }))
        );

        const updateToDefaultOptions = () => {
            const defaultOptions = props.options.map(option => ({ ...option, selected: selectedOption.value === option.value }));
            setOptions(defaultOptions);
        };

        const handleWrapperClick = () => {
            setInputValue(selectedOption.label);
            updateToDefaultOptions();
        };

        const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
            // @ts-ignore
            e.target.setSelectionRange(inputValue.length, inputValue.length);
        };

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setInputValue(value);
            const newOptions = options.filter(op => includesIgnoreCase(op.label, value));
            newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
        };

        const handleOptionClick = (option: Option) => () => {
            setInputValue(option.label);
            setSelectedOption(option);
            setOptions(props.options.map(op => ({ ...op, selected: option.value === op.value })));
            props.onChange && props.onChange(option.value);
        };

        const handleOuterClick = () => {
            updateToDefaultOptions();
            setInputValue(selectedOption.label);
        };

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition }}>
                {label && <Label {...{ required, labelPosition }}>{label}</Label>}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition }} onClick={handleWrapperClick}>
                        <Input
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
                {description && <Text>{description}</Text>}
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
