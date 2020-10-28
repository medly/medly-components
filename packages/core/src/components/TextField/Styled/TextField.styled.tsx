import { css, getFontStyle, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const transformLabel = ({ variant, multiline }: StyledProps) => {
    const fusionLabelStyle = `            
        background-color: white;
        padding: 0 0.4rem;
        z-index: 1;
        font-weight: 500`;

    if (multiline && variant === 'fusion') {
        return css`
            transform: translateY(-120%) scale(0.67);
            ${fusionLabelStyle};
        `;
    }
    if (multiline && variant !== 'fusion') {
        return 'transform: translateY(-50%) scale(0.75)';
    }
    if (variant === 'fusion') {
        return css`
            transform: translateY(-135%) scale(0.67);
            ${fusionLabelStyle};
        `;
    }
    return 'transform: translateY(-87%) scale(0.75)';
};

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        padding-bottom: ${variant === 'filled' ? '0.7rem' : variant === 'fusion' ? '1.3rem' : '0.6rem'};
    `;
};

const getInputHeight = ({ size, multiline, variant }: StyledProps) => {
    if (size === 'S' || (size === 'M' && variant === 'fusion')) {
        return '100%';
    } else if (size === 'M' && variant !== 'fusion' && multiline) {
        return '90%';
    } else {
        return 'auto';
    }
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    height: ${getInputHeight};
    margin: ${({ multiline, variant, size }) => (multiline && variant !== 'fusion' && size === 'M' ? '1.6rem 0 0 0' : 0)};
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background: transparent;
    border: none;
    text-overflow: ellipsis;
    resize: none;
    z-index: 1;
    padding: 0;

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
        opacity: ${({ size }) => size === 'S' && '0'};
        ${({ size }) => size === 'M' && transformLabel};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }
`;
