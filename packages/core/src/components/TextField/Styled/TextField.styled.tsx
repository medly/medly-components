import { css, getFontStyle, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const transformLabel = (variant: string) => {
    if (variant === 'fusion') {
        return css`
            transform: translateY(-140%) scale(0.67);
            background-color: white;
            padding: 0 0.4rem;
            z-index: 1;
        `;
    }
    return 'transform: translateY(-87%) scale(0.75)';
};

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        padding-bottom: ${variant === 'filled' ? '0.7rem' : variant === 'fusion' ? '1.4rem' : '0.6rem'};
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
    z-index: 1;

    ${({ isLabelPresent, size }) => isLabelPresent && size !== 'S' && styleWithLabel};
    &,
    & ~ ${MaskPlaceholder} {
        ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
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
        ${({ size, variant }) => size === 'M' && transformLabel(variant)};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }
`;
