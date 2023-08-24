import styled from 'styled-components';
import { TextFieldVariants } from '../types';

export const HelperText = styled('span')<{
    size: 'S' | 'M';
    variant: TextFieldVariants;
}>`
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: ${({ variant }) => (variant === 'fusion' ? '0.4rem' : '0.5rem')} ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')} 0;
    white-space: initial;
    user-select: none;
`;
