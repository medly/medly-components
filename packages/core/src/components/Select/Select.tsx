import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import Label from '../Label';
import { Popover, PopoverWrapper } from '../Popover';
import Text from '../Text';
import { filterOptions, getDefaultSelected, getOptionsWithSelected } from './helpers';
import Options from './Options';
import { SelectIconStyled, SelectWrapperStyled } from './Select.styled';
import { Option, SelectProps } from './types';

const Select: React.SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { description, label, placeholder, labelPosition, required, fullWidth } = props;
        const defaultSelected = getDefaultSelected(props.options, props.defaultSelected);
        const [inputValue, setInputValue] = useState(defaultSelected.label);
        const [selectedOption, setSelectedOption] = useState(defaultSelected);
        const [options, setOptions] = useState(getOptionsWithSelected(props.options, defaultSelected));

        const updateToDefaultOptions = () => setOptions(getOptionsWithSelected(props.options, selectedOption));

        const handleWrapperClick = () => {
            setInputValue(selectedOption.label);
            updateToDefaultOptions();
        };

        const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
            // @ts-ignore
            e.target.setSelectionRange(inputValue.length, inputValue.length);
        };

        const handleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(value);
            const newOptions = filterOptions(options, value);
            newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
        };

        const handleOptionClick = (option: Option) => () => {
            setInputValue(option.label);
            setSelectedOption(option);
            setOptions(getOptionsWithSelected(props.options, option));
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
