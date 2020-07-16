import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import Text from '../Text';
import { flatButton, outlinedButton, solidButton } from './styles';
import { Props } from './types';

const getPaddings = ({ size, edges }: Props & { isHovered?: boolean }) => {
    const paddings = {
        S: {
            top: '0.8rem',
            right: '2.4rem',
            bottom: '1rem',
            left: '2.4rem'
        },
        M: {
            top: '1rem',
            right: '2.4rem',
            bottom: '1.2rem',
            left: '2.4rem'
        }
    };

    if (edges === 'circle') {
        return size === 'S' ? `1.4rem` : `1.6rem`;
    } else {
        return `${paddings[size].top} ${paddings[size].right} ${paddings[size].bottom} ${paddings[size].left}`;
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

    * {
        transition: all 100ms ease-out;
    }
    

    &:hover {
        cursor: pointer;
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
