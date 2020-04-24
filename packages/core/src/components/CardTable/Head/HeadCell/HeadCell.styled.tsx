import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { StyledProps } from './types';

export const HeadCell = styled('th').attrs(({ withWhiteBackground }: StyledProps) => ({
    bgTheme: withWhiteBackground ? 'lightBackground' : 'darkBackground'
}))<StyledProps & { bgTheme: 'lightBackground' | 'darkBackground' }>`
    flex: ${({ flex }) => flex};
    padding: 0;
    margin: 0 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};

    ${Text.Style} {
        display: inline;
        color: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerTextColor};
    }

    ${SvgIcon} {
        cursor: pointer;
        padding-left: 1rem;
        * {
            fill: ${({ theme, bgTheme }) => theme.cardTable[bgTheme].headerTextColor};
        }
    }
`;
HeadCell.defaultProps = { flex: 1, align: 'left' };
