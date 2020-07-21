import { styled } from '@medly-components/utils';

export const ExtendedRowCell = styled('td')`
    grid-column: 2/-1;
    cursor: default;
    padding: 1.2rem 1.6rem 1.2rem 0;
    position: relative;
    &::before {
        content: '';
        top: 0;
        left: 0;
        position: absolute;
        width: calc(100% - 1.6rem);
        border-top: 1px solid ${({ theme }) => theme.table.borderColor};
    }
`;
