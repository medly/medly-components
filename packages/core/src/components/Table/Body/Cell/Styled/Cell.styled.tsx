import { css, styled } from '@medly-components/utils';
import Text from '../../../../Text';
import { TableCellStyledProps } from '../types';

export const defaultTableCellPaddings = {
    XS: '0.5rem 0.8rem',
    S: '0.8rem 1.6rem',
    M: '1.2rem 1.6rem',
    L: '1.6rem 2.4rem'
};

export const outlinedTableCellPaddings = {
    ...defaultTableCellPaddings,
    XS: '0.3rem 0.8rem'
};

const wrapTextStyle = css`
        ${Text.Style} {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    `,
    frozenStyle = css`
        position: sticky;
        left: 0;
        z-index: 1;

        * {
            z-index: 1;
        }
    `;

export const Cell = styled('td')<TableCellStyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    padding: ${({ hidden, tableSize, theme }) =>
        hidden ? '0' : (theme.table.row.hoveredStyle.style === 'shadow' ? defaultTableCellPaddings : outlinedTableCellPaddings)[tableSize]};
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};

    ${props => props.frozen && frozenStyle}
    ${props => props.wrapText && wrapTextStyle}
`;
Cell.defaultProps = {
    wrapText: true
};
