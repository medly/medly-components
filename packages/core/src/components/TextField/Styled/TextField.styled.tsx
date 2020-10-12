import { css, getFontStyle, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const styleWithLabel = ({ variant }: StyledProps) => {
    return css`
        align-self: flex-end;
        padding-bottom: ${variant === 'filled' ? '0.7rem' : '0.6rem'};
    `;
};

const setFontStyle = ({ theme, size, multiline }: StyledProps) => {
    if (multiline === true) {
        return `font-size: 1.4rem;
            font-weight: 400;
            letter-spacing: -0.04rem;
            line-height: 2rem;
            font-family: Open Sans`;
    }
    return getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] });
};

const setHeight = ({ multiline }: StyledProps) => {
    console.log(multiline);
    return multiline === true && `height: 100%`;
};

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    ${setHeight};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background: transparent;
    border: none;
    text-overflow: ellipsis;
    resize: none;

    ${({ isLabelPresent, size }) => isLabelPresent && size !== 'S' && styleWithLabel};
    &,
    & ~ ${MaskPlaceholder} {
        ${setFontStyle}
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
        opacity: ${({ multiline }) => (multiline === true ? 1 : 0)};
        transition: all 100ms ease-out;
    }

    &:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
        opacity: ${({ size }) => size === 'S' && '0'};
        transform: ${({ size }) => size === 'M' && 'translateY(-87%) scale(0.75)'};
    }

    &:not(:placeholder-shown) ~ ${MaskPlaceholder} {
        opacity: 1;
    }
`;

// opacity: ${({ multiline }) => (multiline === true ? 1 : 0)};
