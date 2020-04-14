import { SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { StyledProps } from './types';

const getColor = ({ theme, color, disabled }: StyledProps) => (disabled ? theme.chip.disabledColor : color || theme.chip.defaultColor);

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

export const Chip = styled('button')<StyledProps>`
    background-color: transparent;
    border: none;
    border-radius: 20px;
    padding: 3px 10px;
    margin: 2px;
    user-select: none;
    text-decoration: none;
    max-width: max-content;
    cursor: ${({ onClick, disabled }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'default')};

    &:focus {
        outline: none;
    }

    ${props => props.variant === 'flat' && flat()};
    ${props => props.variant === 'outlined' && outlined()};
    ${props => props.variant === 'solid' && solid()};

    ${Text.Style} + ${SvgIcon}{
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        margin-left: 10px;
    }

    ${centerAligned()}
`;
