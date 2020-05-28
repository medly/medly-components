import {
    Checkbox,
    CheckboxGroup,
    DatePicker,
    DateRangePicker,
    FileInput,
    MultiSelect,
    Radio,
    RadioGroup,
    SingleSelect,
    TextField
} from '@medly-components/core';
import { GetComponentProps } from '@medly-components/utils';
import { HTMLProps } from 'react';
import { Handlers } from '../../hooks/useForm/types';

export type CommonFieldProps = {
    /** Grid column to render the field */
    gridColumn?: string;
    /** Grid row to render the field */
    gridRow?: string;
};

export type TextFieldProps = GetComponentProps<typeof TextField> & CommonFieldProps & { type: HTMLProps<HTMLInputElement>['type'] };
export type SingleSelectProps = GetComponentProps<typeof SingleSelect> & CommonFieldProps & { type: 'single-select' };
export type MultiSelectProps = GetComponentProps<typeof MultiSelect> & CommonFieldProps & { type: 'multi-select' };
export type CheckboxProps = GetComponentProps<typeof Checkbox> & CommonFieldProps & { type: 'checkbox' };
export type CheckboxGroupProps = GetComponentProps<typeof CheckboxGroup> & CommonFieldProps & { type: 'checkbox-group' };
export type RadioProps = GetComponentProps<typeof Radio> & { type: 'radio' };
export type RadioGroupProps = GetComponentProps<typeof RadioGroup> & CommonFieldProps & { type: 'radio-group' };
export type DatePickerProps = GetComponentProps<typeof DatePicker> & CommonFieldProps & { type: 'date' };
export type DateRangePickerProps = GetComponentProps<typeof DateRangePicker> & {
    type: 'date-range';
    displayFormat?: DatePickerProps['displayFormat'];
};
export type FileInputProps = GetComponentProps<typeof FileInput> &
    CommonFieldProps & {
        type: 'file';
        multiple?: boolean;
        maxSize?: number;
        accept?: string;
    };
export type NestedProps = {
    /** Type to identify field type */
    type: 'nested';
    /** Nested Fields */
    fields: {
        [key: string]: FieldProperties;
    };
    /** Label for Field group */
    label?: string;
    /** This will be handled internally */
    disabled?: boolean;
};

export type DisplayFormat = DatePickerProps['displayFormat'];

export type FieldProperties =
    | TextFieldProps
    | FileInputProps
    | SingleSelectProps
    | MultiSelectProps
    | CheckboxProps
    | CheckboxGroupProps
    | RadioProps
    | RadioGroupProps
    | DatePickerProps
    | DateRangePickerProps
    | NestedProps;

export interface Props {
    // State variable which holds all the fields values
    values: { [key: string]: any };
    // Handlers for all kind of components
    handlers: Handlers;
    // Fields json
    fields?: {
        [key: string]: FieldProperties;
    };
    // Name of the parent component
    parentName?: string;
    // Use it to disable any component
    disabled?: boolean;
    // Error messages
    errorMessages?: { [K: string]: any };
    // add error message
    addErrorMessage: (key: string, message: string) => void;
}
