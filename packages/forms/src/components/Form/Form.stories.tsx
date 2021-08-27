import React, { ChangeEvent, FC, useState } from 'react';
import { Form, FormActionSchema } from '..';
import { CommonFieldProps, CustomComponentProps, NestedProps } from '../Fields/types';
import { Button, TextField } from '@medly-components/core';
import { action } from '@storybook/addon-actions';

export const CommonProps: React.FC<{
    /** Type of field */
    type:
        | 'text'
        | 'email'
        | 'password'
        | 'file'
        | 'single-select'
        | 'multi-select'
        | 'checkbox'
        | 'checkbox-group'
        | 'radio-group'
        | 'date'
        | 'date-range'
        | 'url'
        | 'tel'
        | 'time'
        | 'month'
        | 'week'
        | 'range'
        | 'color'
        | 'search'
        | 'nested';
} & CommonFieldProps> = () => null;

export const NestedFieldProps: React.FC<NestedProps> = () => null;

export const ActionSchema: React.FC<FormActionSchema> = () => null;
ActionSchema.defaultProps = {
    alignItems: 'right',
    flexDirection: 'row'
};

type CustomPhoneFieldProps = {
    value: string;
    name: string;
    isRemovable: boolean;
    onRemoveField: (name: string) => void;
    onChange: (name: string, value: string) => void
};
const CustomPhoneField: FC<CustomPhoneFieldProps> = ({ value, name, isRemovable, onRemoveField, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                value={value}
                name={name}
                label='Phone number'
                required
                fullWidth
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(name, e.target.value)} />
            <Button disabled={isRemovable} variant='flat' size='XS' onClick={() => onRemoveField(name)}>Remove</Button>
        </div>
    );
};

type AddPhoneNumberProps = { fields: { [key: string]: any }[], setFields: (data: any) => void; };
const AddPhoneNumber: FC<AddPhoneNumberProps> = ({ fields, setFields }) => {
    const lastField = fields[fields.length - 1];
    const newFieldIndex = lastField.index + 1;
    const disabled = newFieldIndex > 3;
    const addPhoneNumberField = () => setFields([
        ...fields,
        {
            fieldName: `phone${newFieldIndex}`,
            index: newFieldIndex,
            type: 'custom',
            Component: CustomPhoneField,
            onRemoveField: (name: string) => setFields(fields.filter(field => field.fieldName !== name))
        }
    ]);
    return (<div><Button onClick={addPhoneNumberField} variant='flat' size='XS' disabled={disabled}>+ Add phone number</Button></div>);
};

const defaultFields = [
    {
        fieldName: 'firstName',
        type: 'text',
        required: true,
        label: 'First Name',
        gridColumn: '1/7'
    },
    {
        fieldName: 'lastName',
        type: 'text',
        required: true,
        label: 'Last Name',
        gridColumn: '7/-1'
    },
    {
        fieldName: 'phone1',
        index: 1,
        type: 'tel',
        required: true,
        label: 'Phone number'
    }
];

export const CustomFieldForm = () => {
    const [fields, setFields] = useState(defaultFields);
    const addPhoneNumberField = {
        type: 'custom',
        Component: AddPhoneNumber,
        fields: fields,
        setFields: setFields
    };
    const fieldSchema = fields.reduce((acc, cur) => ({ ...acc, [cur.fieldName]: cur }), {});


    return <Form fieldSchema={{ ...fieldSchema, addPhoneNumberField }} onSubmit={action('Submitted')} />;
};

export const CustomComponentPropSchema: React.FC<CustomComponentProps> = () => null;
