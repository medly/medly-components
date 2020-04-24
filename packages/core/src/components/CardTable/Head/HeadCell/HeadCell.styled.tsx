import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { StyledProps } from './types';

export const HeadCell = styled('th').attrs(({ withWhiteBackground }: StyledProps) => ({
    bgTheme: withWhiteBackground ? 'lightBackground' : 'darkBackground'
}))<StyledProps & { bgTheme: 'lightBackground' | 'darkBackground' }>`
    flex: ${({ flex }) => flex};
    padding: 0;
    padding: 2.4rem 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};

    &::after {
        content: '';
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${({ theme, bgTheme, isActive }) => (isActive ? theme.cardTable[bgTheme].headerActiveColor : 'transparent')};
        height: 0.2rem;
        border-radius: 0.2rem 0.2rem 0 0;
    }

    &:hover {
        ${Text.Style} {
            color: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerHoverColor};
        }
        &::after {
            background-color: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerHoverColor};
        }

        ${SvgIcon} {
            * {
                fill: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerHoverColor};
            }
        }
    }

    ${Text.Style} {
        display: inline;
        cursor: default;
        color: ${({ theme, bgTheme, isActive }) =>
            isActive ? theme.cardTable[bgTheme].headerActiveColor : theme.cardTable[bgTheme].headerColor};
    }

    ${SvgIcon} {
        cursor: pointer;
        padding-left: 1rem;
        * {
            fill: ${({ theme, bgTheme, isActive }) =>
                isActive ? theme.cardTable[bgTheme].headerActiveColor : theme.cardTable[bgTheme].headerColor};
        }
    }
`;
HeadCell.defaultProps = { flex: 1, align: 'left' };
