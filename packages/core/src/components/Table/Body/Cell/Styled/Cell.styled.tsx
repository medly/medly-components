import { css, styled } from '@medly-components/utils';
import Text from '../../../../Text';
import { TableCellStyledProps } from '../types';

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
    padding: ${({ hidden }) => (hidden ? '0' : '1.2rem 1.6rem')};
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};

    ${props => props.frozen && frozenStyle}
    ${props => props.wrapText && wrapTextStyle}
`;
Cell.defaultProps = {
    wrapText: true
};
