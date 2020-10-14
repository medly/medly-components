import { css, getFontStyle, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { Label } from './Label.styled';
import { MaskPlaceholder } from './MaskPlaceholder.styled';

const transformLabel = ({ variant, multiline }: StyledProps) => {
    const fusionLabelStyle = `            
        background-color: white;
        padding: 0 0.4rem;
        z-index: 1;`;
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
            transform: translateY(-140%) scale(0.67);
            ${fusionLabelStyle};
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

const setFontStyle = ({ theme, size, multiline }: StyledProps) => {
    if (multiline) {
        return getFontStyle({ theme, fontVariant: 'body2' });
    }
    return getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] });
};

const setHeight = ({ multiline }: StyledProps) => multiline && `height: 100%`;

export const Input = styled('input')<StyledProps>`
    color: ${({ variant, theme }) => theme.textField[variant].default.textColor};
    width: 100%;
    ${setHeight};
    margin: 0;
    padding: ${({ multiline, variant, size }) => (multiline && variant !== 'fusion' && size === 'M' ? '1.6rem 0 0 0' : 0)};
    box-sizing: border-box;
    transition: all 100ms ease-out;
    background: transparent;
    border: none;
    text-overflow: ellipsis;
    resize: none;
    z-index: 1;
    scroll-padding-top: 10px;

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
