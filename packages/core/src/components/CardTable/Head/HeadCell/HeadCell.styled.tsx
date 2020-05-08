import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { StyledProps } from './types';

export const HeadCellContent = styled('span')`
    padding: 1rem 1.6rem;
    display: flex;
    align-items: center;
`;

export const HeadCell = styled('th').attrs(({ withWhiteBackground }: StyledProps) => ({
    bgTheme: withWhiteBackground ? 'lightBackground' : 'darkBackground'
}))<StyledProps & { bgTheme: 'lightBackground' | 'darkBackground' }>`
    padding: 0 0.8rem;
    margin: 1.4rem 0;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};

    &::after {
        content: '';
        width: calc(100% - 1.6rem);
        margin: 0 0.8rem;
        display: block;
        position: absolute;
        bottom: -1.6rem;
        left: 0;
        background-color: ${({ theme, bgTheme, isActive }) => (isActive ? theme.cardTable[bgTheme].headerActiveColor : 'transparent')};
        height: 0.2rem;
        transition: all 100ms ease-out;
        border-radius: 0.2rem 0.2rem 0 0;
    }

    ${HeadCellContent} {
        &:hover {
            cursor: ${({ isSortEnabled }) => (isSortEnabled ? 'pointer' : 'default')};
            ${Text.Style} {
                color: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerHoverColor};
            }
            ${SvgIcon} {
                * {
                    fill: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerHoverColor};
                }
            }
        }
    }

    ${Text.Style} {
        transition: all 100ms ease-out;
        user-select: none;
        display: inline;
        color: ${({ theme, bgTheme, isActive }) =>
            isActive ? theme.cardTable[bgTheme].headerActiveColor : theme.cardTable[bgTheme].headerColor};
    }

    ${SvgIcon} {
        transition: all 100ms ease-out;
        width: 2.4rem;
        cursor: pointer;
        padding-left: 0.4rem;
        * {
            fill: ${({ theme, bgTheme, isActive }) =>
                isActive ? theme.cardTable[bgTheme].headerActiveColor : theme.cardTable[bgTheme].headerColor};
        }
    }
`;
HeadCell.defaultProps = { align: 'left' };
