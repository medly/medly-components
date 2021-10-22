import styled from 'styled-components';
import { InputSeparatorProps } from './types';

export const InputSeparator = styled.i<InputSeparatorProps>`
    border-right: 0.1rem solid
        ${({ theme, variant, isErrorPresent, isActive, disabled }) =>
            theme.dateRangePicker.inputSeparatorColor[variant][
                disabled ? 'disabled' : isErrorPresent ? 'error' : isActive ? 'active' : 'default'
            ]};
    height: ${({ size }) => (size === 'S' ? '2rem' : '3.2rem')};
    margin-right: ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
    border-radius: 0.1rem;
    transition: border-color 100ms ease-out;
`;
