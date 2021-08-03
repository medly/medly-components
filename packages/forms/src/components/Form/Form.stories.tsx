import React from 'react';
import { FormActionSchema } from '..';
import { CommonFieldProps, NestedProps } from '../Fields/types';

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
            | 'reset'
            | 'color'
            | 'search'
            | 'image'
            | 'hidden'
            | 'button'
            | 'submit'
            | 'password'
            | 'nested';
    } & CommonFieldProps
> = () => null;

export const NestedFieldProps: React.FC<NestedProps> = () => null;

export const ActionSchema: React.FC<FormActionSchema> = () => null;
ActionSchema.defaultProps = {
    alignItems: 'right',
    flexDirection: 'row'
};
