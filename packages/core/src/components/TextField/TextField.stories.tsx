import { defaultTheme, TextFieldTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React, { useCallback, useState } from 'react';
import Button from '../Button';
import { TextField } from './TextField';
import { Props } from './types';

export const variants: Props['variant'][] = ['filled', 'outlined'];

export const ThemeInterface: React.SFC<TextFieldTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.textField
};

const Form = styled('form')`
    display: flex;
    align-items: center;
`;
export const BuiltIn: React.SFC = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            setEmail(target.value);
        },
        handleFormSubmit = (e: React.FormEvent) => {
            e.preventDefault();
        };
    return (
        <Form onSubmit={handleFormSubmit}>
            <TextField
                withBuiltInValidation
                type="email"
                label="Email"
                placeholder="Enter email"
                required
                value={email}
                onChange={handleEmailChange}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
};

type Result = [
    {
        value: string;
        errorText: string;
        onChange: (e: React.FormEvent<HTMLInputElement>) => void;
        onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
        onInvalid: (e: React.FormEvent<HTMLInputElement>) => void;
    },
    React.Dispatch<React.SetStateAction<string>>
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useTextInput = ({ initialState = '', validator = (vl: string) => '' }): Result => {
    const [value, setValue] = useState(initialState),
        [errorText, setErrorText] = useState('');

    const onChange = useCallback((event: React.FormEvent) => setValue((event.target as HTMLInputElement).value), []),
        onBlur = useCallback((event: React.FormEvent) => setErrorText((event.target as HTMLInputElement).validationMessage), []),
        onInvalid = useCallback((event: React.FormEvent) => {
            event.preventDefault();
            setErrorText((event.target as HTMLInputElement).validationMessage);
        }, []);

    return [{ value, errorText, onChange, onBlur, onInvalid }, setErrorText];
};

const emailValidation = (value: string) => {
    if (value === '') return 'Email is required';
    if (!value.includes('@')) return 'Email address should contain @';
};

export const Custom: React.SFC = () => {
    const [email] = useTextInput({ initialState: '', validator: emailValidation }),
        handleFormSubmit = useCallback((e: React.FormEvent) => e.preventDefault(), []);

    return (
        <Form onSubmit={handleFormSubmit}>
            <TextField type="email" label="Email" placeholder="Enter email" required {...email} />
            <Button type="submit">Submit</Button>
        </Form>
    );
};
