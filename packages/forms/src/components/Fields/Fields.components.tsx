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
import { FieldHeader, FieldWrapper } from './Fields.styled';
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

export const Fields: React.SFC<Props> = React.memo(props => {
    const { fields, values, handlers, parentName, errorMessages, addErrorMessage } = props;

    return (
        fields && (
            <>
                {Object.keys(fields).map(key => {
                    // @ts-ignore
                    const { gridColumn, gridRow, ...componentProps } = fields[key],
                        disabled = props.disabled || componentProps.disabled,
                        name = parentName ? `${parentName}.${key}` : key,
                        value = values[name];

                    const commonProps = {
                        id: name,
                        ...componentProps,
                        name,
                        disabled,
                        onFocus: handlers.handleFocus(name, onfocus),
                        helperText: errorMessages[name] || (componentProps as TextFieldProps).helperText,
                        description: errorMessages[name] || (componentProps as FileInputProps).description,
                        descriptionColor: errorMessages[name] && 'red'
                    };

                    if (componentProps.type === 'nested') {
                        return (
                            <>
                                <FieldHeader textVariant="h4">{componentProps.label}</FieldHeader>
                                <Fields
                                    values={values}
                                    disabled={disabled}
                                    handlers={handlers}
                                    fields={(componentProps as NestedProps).fields}
                                    addErrorMessage={addErrorMessage}
                                    parentName={parentName ? `${parentName}.${name}` : name}
                                />
                            </>
                        );
                    }

                    return (
                        <FieldWrapper {...{ gridColumn, gridRow }} key={key}>
                            {(() => {
                                switch (componentProps.type) {
                                    case 'text':
                                    case 'email':
                                    case 'password':
                                        return (
                                            <TextField
                                                withBuiltInValidation
                                                {...({
                                                    ...commonProps,
                                                    value,
                                                    onChange: handlers.handleTextChange(name)
                                                } as TextFieldProps)}
                                            />
                                        );

                                    case 'number':
                                        return (
                                            <TextField
                                                withBuiltInValidation
                                                {...({
                                                    ...commonProps,
                                                    value,
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
                                                withBuiltInValidation
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

                                    case 'date':
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

                                    case 'date-range': {
                                        return (
                                            <DateRangePicker
                                                {...{
                                                    ...({
                                                        ...commonProps,
                                                        value: handlers.getPeriodFromDates(
                                                            values[`${name}.startDate`],
                                                            values[`${name}.endDate`]
                                                        ),
                                                        onChange: handlers.handleDateRangeChange(
                                                            name,
                                                            (componentProps as DateRangePickerProps).displayFormat
                                                        )
                                                    } as DateRangePickerProps)
                                                }}
                                            />
                                        );
                                    }

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
    fields: {},
    errorMessages: {}
};
