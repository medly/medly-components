import { WithStyle } from '@medly-components/utils';
import React, { SFC, useEffect, useState } from 'react';
import Chip from '../Chip';
import FieldWithLabel from '../FieldWithLabel';
import Input from '../Input';
import { Popover, PopoverWrapper } from '../Popover';
import { filterOptions, getDefaultSelectedOptions } from './helpers';
import { SelectIconStyled, SelectWrapperStyled } from './MultiSelect.styled';
import Options from './Options';
import { SelectProps } from './types';

export const MultiSelect: SFC<SelectProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { id, description, label, labelPosition, required, fullWidth, disabled, minWidth } = props;

        const [inputValue, setInputValue] = useState(''),
            [selectedOptions, setSelectedOptions] = useState(getDefaultSelectedOptions(props.options, props.defaultValues)),
            [options, setOptions] = useState(props.options),
            [placeholder, setPlaceholder] = useState(
                props.defaultValues.length > 0 ? `${props.defaultValues.length} options selected` : props.placeholder
            );

        useEffect(() => {
            setSelectedOptions(getDefaultSelectedOptions(props.options, props.defaultValues));
            setOptions(props.options);
        }, [props.options, props.defaultValues]);

        useEffect(() => {
            setPlaceholder(selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : props.placeholder);
        }, [selectedOptions]);

        const updateToDefaultOptions = () => setOptions(props.options);

        const handleWrapperClick = () => {
                setInputValue('');
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
            handleOptionClick = (values: any[]) => {
                setInputValue('');
                const selected = getDefaultSelectedOptions(options, values);
                setSelectedOptions(selected);
                props.onChange && props.onChange(values);
            },
            handleOuterClick = () => {
                updateToDefaultOptions();
                setInputValue('');
            },
            handleChipDelete = (value: any) => () => {
                setInputValue('');
                const newSelectedOptions = selectedOptions.filter(so => so.value !== value).map(op => op.value);
                setSelectedOptions(getDefaultSelectedOptions(options, newSelectedOptions));
                props.onChange && props.onChange(newSelectedOptions);
            };

        return (
            <FieldWithLabel {...{ fullWidth, labelPosition, minWidth }}>
                {label && <FieldWithLabel.Label {...{ required, labelPosition }}>{label}</FieldWithLabel.Label>}
                <PopoverWrapper interactionType="click" onOuterClick={handleOuterClick}>
                    <SelectWrapperStyled {...{ description, fullWidth, labelPosition, disabled }} onClick={handleWrapperClick}>
                        {props.showChips &&
                            selectedOptions.map(op => (
                                <Chip key={op.value} disabled={disabled} label={op.label} onDelete={handleChipDelete(op.value)} />
                            ))}
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
                    <Popover fullWidth>
                        {!disabled && (
                            <Options
                                showCheckbox={props.showCheckbox}
                                defaultValues={selectedOptions}
                                options={options}
                                onOptionClick={handleOptionClick}
                            />
                        )}
                    </Popover>
                </PopoverWrapper>
                {description && <FieldWithLabel.Description>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
MultiSelect.Style = SelectWrapperStyled;
MultiSelect.defaultProps = {
    labelPosition: 'left',
    defaultValues: [],
    showChips: true,
    showCheckbox: true,
    fullWidth: false,
    required: false,
    label: '',
    description: '',
    placeholder: 'Please Select . . .'
};
