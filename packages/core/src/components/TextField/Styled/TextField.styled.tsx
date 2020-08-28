import { css, getFontStyle, styled } from '@medly-components/utils';
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
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background: transparent;
    border: none;
    text-overflow: ellipsis;

    ${({ isLabelPresent, size }) => isLabelPresent && size !== 'S' && styleWithLabel};
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}

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
