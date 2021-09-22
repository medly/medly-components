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
import { GetComponentProps } from '@medly-components/utils';
import React from 'react';
import { FieldWrapper, Header, HelperText } from './Fields.styled';
import { CheckboxProps, DatePickerProps, DateRangePickerProps, FieldsProps, FileInputProps, NestedProps, TextFieldProps } from './types';

export const Fields: React.FC<FieldsProps> = React.memo(props => {
    const { fields, values, handlers, parentName, errorMessages, addErrorMessage } = props;

    return fields ? (
        <>
            {Object.keys(fields).map(key => {
                // @ts-ignore
                const { gridColumn, gridRow, component: Component, ...componentProps } = fields[key],
                    // @ts-ignore
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
                    errorText: errorMessages?.[name],
                    variant: variant,
                    // These two fields will be removed very soon
                    description: errorMessages?.[name] || (componentProps as FileInputProps).description,
                    descriptionColor: errorMessages?.[name] && 'red'
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
                                    delete commonProps.type;
                                    return (
                                        <CheckboxGroup
                                            {...({
                                                ...commonProps,
                                                values: value,
                                                onChange: handlers.handleCheckboxGroupChange(name)
                                            } as GetComponentProps<typeof CheckboxGroup>)}
                                        />
                                    );
                                case 'radio-group':
                                    delete commonProps.type;
                                    return (
                                        <RadioGroup
                                            {...({
                                                ...commonProps,
                                                value,
                                                onChange: handlers.handleRadioGroupChange(name)
                                            } as GetComponentProps<typeof RadioGroup>)}
                                        />
                                    );
                                case 'single-select':
                                    delete commonProps.type;
                                    return (
                                        <SingleSelect
                                            {...({
                                                ...commonProps,
                                                value,
                                                onChange: handlers.handleSingleSelectChange(name)
                                            } as GetComponentProps<typeof SingleSelect>)}
                                        />
                                    );
                                case 'multi-select':
                                    delete commonProps.type;
                                    return (
                                        <MultiSelect
                                            {...({
                                                ...commonProps,
                                                values: value,
                                                onChange: handlers.handleMultiSelectChange(name)
                                            } as GetComponentProps<typeof MultiSelect>)}
                                        />
                                    );
                                case 'date':
                                    delete commonProps.type;
                                    return (
                                        <DatePicker
                                            {...({
                                                ...commonProps,
                                                value: value || null,
                                                onChange: handlers.handleDateChange(name, (componentProps as DatePickerProps).displayFormat)
                                            } as GetComponentProps<typeof DatePicker>)}
                                        />
                                    );
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
                                case 'custom':
                                    return <Component {...commonProps} value={value} values={values} onChange={handlers.handleChange} />;

                                default:
                                    return null;
                            }
                        })()}
                    </FieldWrapper>
                );
            })}
        </>
    ) : null;
});

Fields.displayName = 'Fields';
Fields.defaultProps = {
    parentName: '',
    disabled: false,
    showDecorators: true,
    fields: {},
    errorMessages: {}
};
