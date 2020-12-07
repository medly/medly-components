import { styled } from '@medly-components/utils';
import Text from '../../Text';

export const TFoot = styled('tfoot')<{ showWithCardStyle: boolean }>`
    display: flex;
    align-items: center;
    position: sticky;
    left: 0;
    background-color: ${({ theme, showWithCardStyle }) => (showWithCardStyle ? 'transparent' : theme.colors.white)};
    min-height: ${({ showWithCardStyle }) => (showWithCardStyle ? '5.4rem' : '4.8rem')};
    border-top: ${({ theme, showWithCardStyle }) => !showWithCardStyle && `0.1rem solid ${theme.table.borderColor}`};
`;

export const FootRow = styled('tr')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 1.6rem 0 0.8rem;

    td > ${Text.Style} {
        line-height: 2rem;
        font-size: 1.2rem;
    }
`;
