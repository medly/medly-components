import { getFontStyle, styled } from '@medly-components/utils';
import Text from '../../Text';

export const TBody = styled('tbody')`
    display: block;
    min-width: fit-content;
    ${Text.Style} {
        ${({ theme }) => getFontStyle({ theme, fontVariant: theme.table.row.fontVariant })}
    }
`;
