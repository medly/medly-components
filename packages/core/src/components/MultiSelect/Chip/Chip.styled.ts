import { SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { Props } from './types';

const getColor = ({ theme }: Props) => theme.colors.grey[600];

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

export const Chip = styled('button')<Props>`
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

    ${solid()};

    ${Text.Style} + ${SvgIcon}{
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        margin-left: 10px;
    }

    ${centerAligned()}
`;
