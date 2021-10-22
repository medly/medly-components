import { getFontStyle } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { StyledProps } from '../types';
import { CharacterCount } from './CharacterCount.styled';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const transformLabel = ({ variant, multiline }: StyledProps) => {
    if (variant === 'fusion') {
        return css`
            background-color: white;
            padding: 0 0.5rem;
            transform: translateX(-0.4rem) translateY(${multiline ? '-120%' : '-140%'}) scale(0.67);
        `;
    } else {
        return css`
            transform: translateY(${multiline ? '-50%' : '-87%'}) scale(0.75);
        `;
    }
};

const transformCharacterCount = ({ variant }: StyledProps) => {
    if (variant === 'fusion') {
        return css`
            background-color: white;
            padding: 0 0.5rem;
            transform: translateY(-167%);
        `;
    }
};

const getInputHeight = ({ inputSize, multiline, variant }: StyledProps) =>
    multiline ? (inputSize === 'M' ? (variant === 'fusion' ? '100%' : '90%') : '100%') : undefined;

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        margin-bottom: ${variant === 'filled' ? '0.7rem' : variant === 'fusion' ? '1.3rem' : '0.6rem'};
    `;
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    margin: ${({ multiline, variant, inputSize }) => (multiline && variant !== 'fusion' && inputSize === 'M' ? '1.6rem 0 0 0' : 0)};
    padding: 0;
    height: ${getInputHeight};
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background-color: transparent;
    border: none;
    text-overflow: ellipsis;
    resize: none;
    z-index: 1;

    ${({ isLabelPresent, inputSize, multiline }) => isLabelPresent && inputSize !== 'S' && !multiline && styleWithLabel};
    &,
    & ~ ${MaskPlaceholder} {
        ${({ theme, inputSize, multiline }) =>
            getFontStyle({ theme, fontVariant: multiline && inputSize === 'S' ? 'body2' : theme.textField.textVariant[inputSize] })}
    }

    &&&:focus {
        outline: none;
        box-shadow: unset;
        &::placeholder {
            opacity: 1;
        }
    }

    &:disabled {
        color: ${({ variant, theme }) => theme.textField[variant].disabled.textColor};
        & ~ ${Label},& ~ ${MaskPlaceholder} {
            cursor: not-allowed;
        }
    }

    ::placeholder {
        opacity: 0;
        transition: all 100ms ease-out;
    }

    &:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
        opacity: ${({ inputSize }) => inputSize === 'S' && 0};
        ${({ inputSize }) => inputSize === 'M' && transformLabel};
    }

    &:not(:placeholder-shown) ~ ${CharacterCount}, &:focus ~ ${CharacterCount} {
        position: ${({ inputSize }) => inputSize === 'S' && 'relative'};
        ${({ inputSize }) => inputSize === 'M' && transformCharacterCount};
    }

    &:focus ~ ${Label} {
        font-weight: ${({ variant, theme }) => variant === 'fusion' && theme.font.weights.Medium};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }
`;
