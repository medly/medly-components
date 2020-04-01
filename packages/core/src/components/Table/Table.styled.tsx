import { styled } from '@medly-components/utils';
import Row from './Row';
import { TableStyledProps } from './types';

export const TableStyled = styled('ol')<TableStyledProps>`
    margin: 0;
    padding: 0;
    overflow: auto;
    border: 1px solid ${({ theme }) => theme.table.borderColor};

    * {
        box-sizing: border-box;
    }

    ${Row} {
        &:first-of-type {
            user-select: none;
            position: sticky;
            top: 0;
            z-index: 2;
            align-items: end;
            border: none;

            & > * {
                background-color: ${({ theme }) => theme.table.headerColor};
            }
        }

        &:not(:first-of-type) {
            & > * {
                height: 100%;
            }
        }
    }
`;
