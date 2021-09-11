import { FormFieldSchema } from '@medly-components/forms';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { CommonFieldProps, FormCustomComponent, FormFieldProperties, NestedProps } from '../../Fields/types';
import { Form, FormActionSchema } from '../../index';
import { AddPhoneNumber } from './AddPhoneNumber';

export const CommonProps: React.FC<
    {
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
    } & CommonFieldProps
> = () => null;

export const NestedFieldProps: React.FC<NestedProps> = () => null;

export const ActionSchema: React.FC<FormActionSchema> = () => null;
ActionSchema.defaultProps = {
    alignItems: 'right',
    flexDirection: 'row'
};

const defaultFields = [
    { fieldName: 'firstName', type: 'text', required: true, label: 'First name', gridColumn: '1/7' },
    { fieldName: 'lastName', type: 'text', required: true, label: 'Last name', gridColumn: '7/-1' },
    { fieldName: 'phone1', index: 1, type: 'tel', required: true, label: 'Phone number' }
];

export const CustomFieldForm = () => {
    const [fields, setFields] = useState(defaultFields);
    const addPhoneNumberField: FormFieldProperties = {
        type: 'custom',
        component: AddPhoneNumber,
        fields: fields,
        setFields: setFields
    };
    const fieldSchema: FormFieldSchema = fields.reduce((acc, cur) => ({ ...acc, [cur.fieldName]: cur }), {});

    return <Form fieldSchema={{ ...fieldSchema, addPhoneNumberField }} onSubmit={action('Submitted')} hideActions />;
};

const TotalRent: FormCustomComponent = ({ values: { rent = 0, utilities = 0, internet = 0 } }) => (
    <div>Total rent - {rent + utilities + internet}</div>
);
export const SimpleCustomFieldForm = () => (
    <Form
        fieldSchema={{
            rent: { type: 'number', label: 'Rent' },
            utilities: { type: 'number', label: 'Utilities' },
            internet: { type: 'number', label: 'Internet' },
            total: { type: 'custom', component: TotalRent }
        }}
        onSubmit={action('Submitted')}
        hideActions
    />
);

export const CustomComponentPropSchema: FormCustomComponent = () => null;
