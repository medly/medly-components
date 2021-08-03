import {
    Checkbox,
    CheckboxGroup,
    DatePicker,
    DateRangePicker,
    FileInput,
    MultiSelect,
    RadioGroup,
    SingleSelect,
    TextField
} from '@medly-components/core';
import React from 'react';
import { FieldWrapper, Header, HelperText } from './Fields.styled';
import {
    CheckboxGroupProps,
    CheckboxProps,
    DatePickerProps,
    DateRangePickerProps,
    FileInputProps,
    MultiSelectProps,
    NestedProps,
    Props,
    RadioGroupProps,
    SingleSelectProps,
    TextFieldProps
} from './types';

export const Fields: React.FC<Props> = React.memo(props => {
    const { fields, values, handlers, parentName, errorMessages, addErrorMessage } = props;

    return (
        fields && (
            <>
                {Object.keys(fields).map(key => {
                    // @ts-ignore
                    const { gridColumn, gridRow, ...componentProps } = fields[key],
                        disabled = props.disabled || componentProps.disabled,
                        showDecorators = props.showDecorators,
                        variant = props.variant,
                        name = parentName ? `${parentName}.${key}` : key,
                        value = values[name];

                    const commonProps = {
                        id: name,
                        ...componentProps,
                        name,
                        disabled,
                        showDecorators,
                        minWidth: 'auto',
                        onFocus: handlers.handleFocus(name, (componentProps as TextFieldProps).onFocus),
                        errorText: errorMessages[name],
                        variant: variant,
                        // These two fields will be removed very soon
                        description: errorMessages[name] || (componentProps as FileInputProps).description,
                        descriptionColor: errorMessages[name] && 'red'
                    };

                    if (componentProps.type === 'nested') {
                        return (
                            <React.Fragment key={name}>
                                {(componentProps as NestedProps).header && (
                                    <Header textVariant="h4">{(componentProps as NestedProps).header}</Header>
                                )}
                                {componentProps.helperText && <HelperText textVariant="body2">{componentProps.helperText}</HelperText>}
                                <Fields
                                    values={values}
                                    disabled={disabled}
                                    showDecorators={showDecorators}
                                    variant={variant}
                                    handlers={handlers}
                                    fields={(componentProps as NestedProps).fields}
                                    errorMessages={errorMessages}
                                    addErrorMessage={addErrorMessage}
                                    parentName={name}
                                />
                            </React.Fragment>
                        );
                    }

                    return (
                        <FieldWrapper {...{ gridColumn, gridRow }} key={key}>
                            {(() => {
                                switch (componentProps.type) {
                                    case 'text':
                                    case 'email':
                                    case 'url':
                                    case 'tel':
                                    case 'time':
                                    case 'month':
                                    case 'week':
                                    case 'range':
                                    case 'color':
                                    case 'search':
                                    case 'password':
                                        return (
                                            <TextField
                                                {...({
                                                    ...commonProps,
                                                    value: value || '',
                                                    onChange: handlers.handleTextChange(name)
                                                } as TextFieldProps)}
                                            />
                                        );

                                    case 'number':
                                        return (
                                            <TextField
                                                {...({
                                                    ...commonProps,
                                                    value: value || '',
                                                    onChange: handlers.handleNumberChange(name)
                                                } as TextFieldProps)}
                                            />
                                        );

                                    case 'file':
                                        return (
                                            <FileInput
                                                {...({ ...commonProps, files: value } as FileInputProps)}
                                                onChange={handlers.handleFileChange(name, (componentProps as FileInputProps).maxSize)}
                                            />
                                        );

                                    case 'checkbox':
                                        return (
                                            <Checkbox
                                                {...({
                                                    ...commonProps,
                                                    checked: !!value,
                                                    onChange: handlers.handleCheckboxChange(name)
                                                } as CheckboxProps)}
                                            />
                                        );

                                    case 'checkbox-group':
                                        return (
                                            <CheckboxGroup
                                                {...({
                                                    ...commonProps,
                                                    type: undefined,
                                                    values: value,
                                                    onChange: handlers.handleCheckboxGroupChange(name)
                                                } as CheckboxGroupProps)}
                                            />
                                        );

                                    case 'radio-group':
                                        return (
                                            <RadioGroup
                                                {...({
                                                    ...commonProps,
                                                    type: undefined,
                                                    value,
                                                    onChange: handlers.handleRadioGroupChange(name)
                                                } as RadioGroupProps)}
                                            />
                                        );

                                    case 'single-select':
                                        return (
                                            <SingleSelect
                                                {...({
                                                    ...commonProps,
                                                    type: undefined,
                                                    value,
                                                    onChange: handlers.handleSingleSelectChange(name)
                                                } as SingleSelectProps)}
                                            />
                                        );

                                    case 'multi-select':
                                        return (
                                            <MultiSelect
                                                {...({
                                                    ...commonProps,
                                                    type: undefined,
                                                    values: value,
                                                    onChange: handlers.handleMultiSelectChange(name)
                                                } as MultiSelectProps)}
                                            />
                                        );

                                    case 'date': {
                                        return (
                                            <DatePicker
                                                {...({
                                                    ...commonProps,
                                                    type: undefined,
                                                    value: value || null,
                                                    onChange: handlers.handleDateChange(
                                                        name,
                                                        (componentProps as DatePickerProps).displayFormat
                                                    )
                                                } as DatePickerProps)}
                                            />
                                        );
                                    }
                                    case 'date-range':
                                        return (
                                            <DateRangePicker
                                                {...{
                                                    ...({
                                                        ...commonProps,
                                                        value: handlers.getPeriodFromDates(
                                                            values[`${name}.startDate`],
                                                            values[`${name}.endDate`],
                                                            (componentProps as DateRangePickerProps).displayFormat
                                                        ),
                                                        onChange: handlers.handleDateRangeChange(
                                                            name,
                                                            (componentProps as DateRangePickerProps).displayFormat
                                                        )
                                                    } as DateRangePickerProps)
                                                }}
                                            />
                                        );

                                    default:
                                        return null;
                                }
                            })()}
                        </FieldWrapper>
                    );
                })}
            </>
        )
    );
});

Fields.displayName = 'Fields';
Fields.defaultProps = {
    parentName: '',
    disabled: false,
    showDecorators: true,
    fields: {},
    errorMessages: {}
};
