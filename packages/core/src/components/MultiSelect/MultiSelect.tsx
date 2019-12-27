import { WithStyle } from '@medly-components/utils';
import React, { SFC, useCallback, useEffect, useState } from 'react';
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
        const { id, description, descriptionColor, label, labelPosition, required, fullWidth, disabled, minWidth } = props;

        const [inputValue, setInputValue] = useState(''),
            [selectedOptions, setSelectedOptions] = useState(getDefaultSelectedOptions(props.options, props.values)),
            [options, setOptions] = useState(props.options),
            [placeholder, setPlaceholder] = useState(
                props.values.length > 0 ? `${props.values.length} options selected` : props.placeholder
            );

        useEffect(() => {
            setSelectedOptions(getDefaultSelectedOptions(props.options, props.values));
            setOptions(props.options);
        }, [props.options, props.values]);

        useEffect(() => {
            setPlaceholder(selectedOptions.length > 0 ? `${selectedOptions.length} options selected` : props.placeholder);
        }, [selectedOptions]);

        const updateToDefaultOptions = useCallback(() => setOptions(props.options), [props.options]);

        const handleWrapperClick = useCallback(() => {
                setInputValue('');
                updateToDefaultOptions();
            }, [updateToDefaultOptions]),
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
                    const newOptions = filterOptions(options, value);
                    newOptions.length && value ? setOptions(newOptions) : updateToDefaultOptions();
                },
                [options, updateToDefaultOptions]
            ),
            handleOptionClick = useCallback(
                (values: any[]) => {
                    setInputValue('');
                    const selected = getDefaultSelectedOptions(options, values);
                    setSelectedOptions(selected);
                    props.onChange && props.onChange(values);
                },
                [options, props.onChange]
            ),
            handleOuterClick = useCallback(() => {
                updateToDefaultOptions();
                setInputValue('');
            }, []),
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
                                values={selectedOptions}
                                options={options}
                                onOptionClick={handleOptionClick}
                            />
                        )}
                    </Popover>
                </PopoverWrapper>
                {description && <FieldWithLabel.Description textColor={descriptionColor}>{description}</FieldWithLabel.Description>}
            </FieldWithLabel>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
MultiSelect.Style = SelectWrapperStyled;
MultiSelect.defaultProps = {
    labelPosition: 'left',
    values: [],
    showChips: true,
    showCheckbox: true,
    fullWidth: false,
    required: false,
    label: '',
    description: '',
    placeholder: 'Please Select . . .'
};
