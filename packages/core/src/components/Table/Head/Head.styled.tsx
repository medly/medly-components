import { styled } from '@medly-components/utils';
import Row from '../Body/Row';

export const THead = styled('thead')`
    display: block;

    ${Row} {
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 2;
        align-items: end;

        & > * {
            background-color: ${({ theme }) => theme.table.headerColor};
            border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
        }
    }
`;
