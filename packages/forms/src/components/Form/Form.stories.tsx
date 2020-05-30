import React from 'react';
import { FormActionSchema } from '..';
import { CommonFieldProps, NestedProps } from '../Fields/types';

export const CommonProps: React.SFC<
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
            | 'nested';
    } & CommonFieldProps
> = () => null;

export const NestedFieldProps: React.SFC<NestedProps> = () => null;

export const ActionSchema: React.SFC<FormActionSchema> = () => null;
ActionSchema.defaultProps = {
    alignItems: 'right',
    flexDirection: 'row'
};
