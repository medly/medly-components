import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';
import Text from '../../../Text';
import { StyledProps } from './types';

export const HeadCell = styled('th')<StyledProps>`
    flex: ${({ flex }) => flex};
    padding: 0;
    margin: 2rem 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center')};

    ${Text.Style} {
        display: inline;
    }

    ${SvgIcon} {
        cursor: pointer;
        padding-left: 1rem;
    }
`;
HeadCell.defaultProps = { flex: 1, align: 'left' };
