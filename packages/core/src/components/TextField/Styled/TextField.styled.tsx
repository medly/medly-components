import { css, getFontStyle, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const transformLabel = ({ variant, multiline }: StyledProps) => {
    if (variant === 'fusion') {
        return css`
            background-color: white;
            padding: 0 0.4rem;
            z-index: 1;
            font-weight: 500;
            transform: translateY(${multiline ? '-120%' : '-135%'}) scale(0.67);
        `;
    } else {
        return css`
            transform: translateY(${multiline ? '-50%' : '-87%'}) scale(0.75);
        `;
    }
};

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        padding-bottom: ${variant === 'filled' ? '0.7rem' : variant === 'fusion' ? '1.3rem' : '0.6rem'};
    `;
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    height: ${({ multiline, variant }) =>
        multiline && variant !== 'fusion' ? '100%' : multiline && variant === 'fusion' ? '95%' : 'auto'};
    margin: ${({ multiline, variant, size }) => (multiline && variant !== 'fusion' && size === 'M' ? '1.6rem 0 0 0' : 0)};
    padding: 0;
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background-color: transparent;
    border: none;
    text-overflow: ellipsis;
    resize: none;
    z-index: 1;

    ${({ isLabelPresent, size, multiline }) => isLabelPresent && size !== 'S' && !multiline && styleWithLabel};
    &,
    & ~ ${MaskPlaceholder} {
        ${({ theme, size, multiline }) =>
            getFontStyle({ theme, fontVariant: multiline && size === 'S' ? 'body2' : theme.textField.textVariant[size] })}
    }

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 1;
        }
    }

    &:disabled {
        & ~ ${Label},& ~ ${MaskPlaceholder} {
            cursor: not-allowed;
        }
    }

    ::placeholder {
        opacity: 0;
        transition: all 100ms ease-out;
    }

    &:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
        opacity: ${({ size }) => size === 'S' && 0};
        ${({ size }) => size === 'M' && transformLabel};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }

    &:-webkit-autofill,
    &:-moz-autofill,
    &:-webkit-autofill:focus,
    &:-moz-autofill:focus,
    &:-webkit-autofill:hover,
    &:-moz-autofill:hover {
        background-color: transparent;
    }
`;
