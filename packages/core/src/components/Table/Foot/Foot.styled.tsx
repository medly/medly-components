import { css, styled } from '@medly-components/utils';
import { Theme } from 'packages/theme/src/types';
import Text from '../../Text';
import { TableProps } from '../types';

export const TFoot = styled('tfoot')<{ showWithCardStyle: boolean; tableSize: TableProps['size'] }>`
    display: flex;
    align-items: center;
    position: sticky;
    left: 0;
    bottom: 0;
    z-index: 3;
    background-color: ${({ theme, showWithCardStyle }) => (showWithCardStyle ? 'transparent' : theme.colors.white)};
    min-height: ${({ showWithCardStyle, tableSize }) => (showWithCardStyle ? '5.4rem' : tableSize === 'XS' ? '4rem' : '4.8rem')};
    border-top: ${({ theme, showWithCardStyle }) => !showWithCardStyle && `0.1rem solid ${theme.table.borderColor}`};
`;

const getStyling = ({ theme }: {theme: Theme;}) => {
    const {variants} = theme.font;
    const {fontSize, letterSpacing, lineHeight} = variants[theme.pagination.fontVariant];

    return css`
        font-size: ${fontSize};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
    `;
};

export const FootRow = styled('tr')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 1.6rem 0 0.8rem;

    td {
        padding: 0;
    }

    td > ${Text.Style} {
        ${getStyling}
    }
`;
