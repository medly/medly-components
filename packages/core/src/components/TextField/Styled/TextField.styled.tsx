import { css, getFontStyle, styled } from '@medly-components/utils';
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

const getInputHeight = ({ size, multiline, variant }: StyledProps) =>
    multiline ? (size === 'M' ? (variant === 'fusion' ? '100%' : '90%') : '100%') : undefined;

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        margin-bottom: ${variant === 'filled' ? '0.7rem' : variant === 'fusion' ? '1.3rem' : '0.6rem'};
    `;
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    margin: ${({ multiline, variant, size }) => (multiline && variant !== 'fusion' && size === 'M' ? '1.6rem 0 0 0' : 0)};
    padding: 0;
    height: ${getInputHeight};
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
        opacity: ${({ size }) => size === 'S' && 0};
        ${({ size }) => size === 'M' && transformLabel};
    }

    &:not(:placeholder-shown) ~ ${CharacterCount}, &:focus ~ ${CharacterCount} {
        position: ${({ size }) => size === 'S' && 'relative'};
        ${({ size }) => size === 'M' && transformCharacterCount};
    }

    &:focus ~ ${Label} {
        font-weight: ${({ variant, theme }) => variant === 'fusion' && theme.font.weights.Medium};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }
`;
