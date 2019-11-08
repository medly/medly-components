import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

const getColor = ({ theme, color, disabled }: Props) => (disabled ? theme.button.disabled : theme.button[color]);

const outlined = () => css`
    border: 1px solid ${getColor};
    color: ${getColor};
    ${SvgIcon} {
        * {
            fill: ${getColor};
        }
    }
`;

const solid = () => css`
    border: 1px solid ${getColor};
    background-color: ${getColor};
    color: ${({ theme }) => theme.colors.white};
    ${SvgIcon} {
        * {
            fill: ${({ theme }) => theme.colors.white};
        }
    }
`;

const flat = () => css`
    color: ${getColor};
    ${SvgIcon} {
        * {
            fill: ${getColor};
        }
    }
`;

export const ButtonStyled = styled('button')<Props>`
    background-color: transparent;
    border: none;
    padding: 8px 10px;
    border-radius: 3px;
    user-select: none;
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    ${props => props.variant === 'flat' && flat()};
    ${props => props.variant === 'outlined' && outlined()};
    ${props => props.variant === 'solid' && solid()};

    &:disabled {
        cursor: not-allowed;
    }

    ${SvgIcon} + ${Text.Style}{
        margin-left: 5px;
    }

    ${Text.Style} + ${SvgIcon}{
        margin-left: 5px;
    }

    ${centerAligned()}
`;

ButtonStyled.defaultProps = {
    theme: defaultTheme
};
