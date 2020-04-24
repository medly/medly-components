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
            <TextField type="email" label="Email" placeholder="Enter email" required value={email} onChange={handleEmailChange} />
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
    },
    React.Dispatch<React.SetStateAction<string>>
];

export const useTextInput = ({ initialState = '', validator = (vl: string) => '' }): Result => {
    const [value, setValue] = useState(initialState),
        [errorText, setErrorText] = useState('');

    const onChange = useCallback((event: React.FormEvent) => setValue((event.target as HTMLInputElement).value), []),
        onBlur = useCallback((event: React.FormEvent) => setErrorText(validator((event.target as HTMLInputElement).value)), []);

    return [{ value, errorText, onChange, onBlur }, setErrorText];
};

const emailValidation = (value: string) => !value.includes('@') && 'Email address should contain @';
export const Custom: React.SFC = () => {
    const [email, setEmailErrorText] = useTextInput({ initialState: '', validator: emailValidation });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        email.value === '' && setEmailErrorText('Email is required');
    };
    return (
        <Form onSubmit={handleFormSubmit} noValidate>
            <TextField type="email" label="Email" placeholder="Enter email" required {...email} />
            <Button type="submit">Submit</Button>
        </Form>
    );
};
