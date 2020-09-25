import { defaultTheme, TextFieldTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import { TextField } from './TextField';
import { Props } from './types';

export const variants: Props['variant'][] = ['filled', 'outlined', 'b2cField'];
export const sizes: Props['size'][] = ['S', 'M'];

export const ThemeInterface: React.FC<TextFieldTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.textField
};

const Form = styled('form')`
    display: flex;
    align-items: center;
`;

type Result = [
    {
        value: string;
        onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    },
    React.Dispatch<React.SetStateAction<string>>
];

export const useTextInput = (initialState = ''): Result => {
    const [value, setValue] = useState(initialState),
        onChange = useCallback((event: React.FormEvent) => setValue((event.target as HTMLInputElement).value), []);

    return [{ value, onChange }, setValue];
};

const emailValidation = (value: string) => {
    if (value === '') return 'Email is required';
    if (!value.includes('@')) return 'Email address should contain @';
};

export const Custom: React.FC = () => {
    const [email] = useTextInput(''),
        handleFormSubmit = useCallback((e: React.FormEvent) => e.preventDefault(), []);

    return (
        <Form onSubmit={handleFormSubmit}>
            <TextField type="email" label="Email" placeholder="Enter email" required {...email} validator={emailValidation} />
            <Button type="submit">Submit</Button>
        </Form>
    );
};
