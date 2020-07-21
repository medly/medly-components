import { SvgIconStyled } from '@medly-components/icons/src/SvgIcon/SvgIcon.styled';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import { TableCellStyledProps } from './types';

const wrapTextStyle = css`
        ${Text.Style} {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    `,
    frozenStyle = css`
        left: 0;
        z-index: 1;

        * {
            z-index: 1;
        }
    `,
    selectedBorderStyle = css`
        &&& {
            &::before {
                content: '';
                left: 0;
                top: 0;
                z-index: 2;
                height: 100%;
                width: 0.4rem;
                position: absolute;
                background-color: ${({ theme }) => theme.table.row.selectedBorderColor};
            }
        }
    `,
    shadowStyle = css`
        &::after {
            content: '';
            right: -1.2rem;
            height: 100%;
            width: 1.2rem;
            position: absolute;
            background: ${({ theme }) =>
                `linear-gradient(to right, ${rgba(theme.table.shadowColor, 0.15)}, ${rgba(theme.table.shadowColor, 0)}) `};
        }
    `;

export const Cell = styled('td')<TableCellStyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: ${({ isRowSelectionCell }) => (isRowSelectionCell ? 'visible' : 'hidden')};
    align-items: center;
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    position: ${({ frozen }) => (frozen ? 'sticky' : 'relative')};
    cursor: ${({ isRowSelectionCell }) => isRowSelectionCell && 'default'};
    padding: ${({ hidden, isRowSelectionCell }) => (hidden ? '0' : isRowSelectionCell ? '1.2rem' : '1.2rem 1.6rem')};
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};

    & > ${Checkbox.Style} {
       ${clearMarginPadding()};
    }

    & > ${SvgIconStyled} {
        transition: transform 100ms ease-out;
        transform: ${props => props.isExpanded && `rotate(180deg) `} 
    }

    ${props => props.frozen && frozenStyle}
    ${props => props.wrapText && wrapTextStyle}
    ${props => props.showShadowAtRight && shadowStyle};
    ${props => props.showSelectedRowBorder && selectedBorderStyle}
    
`;
Cell.defaultProps = {
    wrapText: true
};

export const ExpandedCell = styled('td')`
    grid-column: 1/-1;
    cursor: default;
`;

export const CustomComponentWrapper = styled('div')``;

export const LoadingDiv = styled('div')`
    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
    width: 100%;
    height: 2.2rem;
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${({ theme }) => theme.colors.grey[100]};
    background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.grey[100]} 8%,
        ${({ theme }) => theme.colors.grey[200]} 18%,
        ${({ theme }) => theme.colors.grey[100]} 33%
    );
    background-size: 800px 104px;
    position: relative;
`;
