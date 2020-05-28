import React from 'react';
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
