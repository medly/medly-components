import { css, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        padding-bottom: ${variant === 'filled' ? '0.7rem' : '0.6rem'};
    `;
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    font-size: 1.6rem;
    width: 100%;
    margin: 0;
    padding: 0;
    line-height: 2.6rem;
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background: transparent;
    border: none;
    text-overflow: ellipsis;

    ${({ isLabelPresent }) => isLabelPresent && styleWithLabel};

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 1;
        }
    }

    ::placeholder {
        opacity: 0;
        transition: all 100ms ease-out;
    }

    &:not(:placeholder-shown) + ${Label}, &:focus + ${Label} {
        opacity: ${({ size }) => size === 'S' && '0'};
        transform: ${({ size }) => size === 'M' && 'translateY(-87%) scale(0.75)'};
    }
`;
