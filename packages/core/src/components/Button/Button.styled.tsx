import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import Text from '../Text';
import { flatButton, outlinedButton, solidButton } from './styles';
import { Props } from './types';

const getPaddings = ({ size, edges, theme }: Props & { isHovered?: boolean }) => {
    if (edges === 'circle') {
        return size === 'S' ? `1.4rem` : `1.6rem`;
    } else {
        return theme.button.padding[size];
    }
};

export const ButtonStyled = styled('button')<Props>`
    border: none;
    position: relative;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    transition: all 100ms ease-out;
    padding: ${getPaddings};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: ${({ edges, theme }) => theme.button.borderRadius[edges]};
    pointer-events: ${({ isLoading }) => isLoading && 'none'};

    &, ${Text.Style}, ${SvgIcon}, ${SvgIcon} * {
        transition: ${({ isLoading }) => (isLoading ? 'all 200ms ease-out' : 'all 100ms ease-out')};
    }

    &>*:not(:last-child){
        opacity: ${({ isLoading }) => isLoading && 0};
    }

    &:hover {
        cursor: ${({ isLoading }) => !isLoading && 'pointer'};
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ${({ variant }) => variant === 'flat' && flatButton};
    ${({ variant }) => variant === 'outlined' && outlinedButton};
    ${({ variant }) => variant === 'solid' && solidButton};


    ${SvgIcon} + ${Text.Style}{
        margin-left: ${({ theme }) => theme.spacing.S2}
    }

    ${Text.Style} + ${SvgIcon}{
        margin-left: ${({ theme }) => theme.spacing.S2}
    }

    ${centerAligned()}
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme
};
