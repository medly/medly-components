import { defaultTheme, TextFieldTheme } from '@medly-components/theme';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { TextField } from './TextField';
import { TextFieldProps as Props } from './types';
import type { FC } from 'react';

export const variants: Props['variant'][] = ['filled', 'outlined', 'fusion'];
export const sizes: Props['size'][] = ['S', 'M'];

export const ThemeInterface: FC<TextFieldTheme> = () => null;
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

const emailValidation = (value: string) =>
    value === '' ? 'Email is required' : !value.includes('@') ? 'Email address should contain @' : '';

export const Custom: FC = () => {
    const [email] = useTextInput(''),
        handleFormSubmit = useCallback((e: React.FormEvent) => e.preventDefault(), []);

    return (
        <Form onSubmit={handleFormSubmit}>
            <TextField type="email" label="Email" placeholder="Enter email" required {...email} validator={emailValidation} />
            <Button type="submit">Submit</Button>
        </Form>
    );
};
