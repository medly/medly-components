import { SvgIcon } from '@medly-components/icons';
import { Theme } from '@medly-components/theme';
import { clearMarginPadding, css, getFontStyle, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import { resolveValueByTableSize } from '../../helpers';
import { getBorder } from '../../Table.styled';
import { TableProps } from '../../types';
import { HeadCellStyledProps } from './types';

const frozenStyle = css<HeadCellStyledProps>`
        z-index: 3;
        left: ${({ isGroupedTable, isRowActionCell }) => (isGroupedTable && isRowActionCell ? '4.8rem' : 0)};
        * {
            z-index: 3;
        }
    `,
    shadowStyle = css`
        &&& {
            overflow: visible;
            &::after {
                content: '';
                right: -1.2rem;
                height: 100%;
                width: 1.2rem;
                position: absolute;
                background: ${({ theme }) =>
                    `linear-gradient(to right, ${rgba(theme.table.shadowColor, 0.15)}, ${rgba(theme.table.shadowColor, 0)}) `};
            }
        }
    `;

const getHeadCellPadding = ({ hidden, isRowActionCell, tableSize }: HeadCellStyledProps) => {
    const actionCellTableSizePaddingMap = {
            L: '1.6rem 2rem',
            XS: '0.8rem 1.2rem',
            default: '1.6rem 1.2rem'
        },
        cellTableSizePaddingMap = {
            XS: '0.4rem 0.4rem 0.3rem 0.4rem',
            default: '0.8rem'
        };

    let padding = '';
    if (hidden) {
        padding = '0';
    } else if (isRowActionCell) {
        padding = resolveValueByTableSize(tableSize, actionCellTableSizePaddingMap);
    } else {
        padding = resolveValueByTableSize(tableSize, cellTableSizePaddingMap);
    }
    return padding;
};

export const HeadCellStyled = styled.th<HeadCellStyledProps>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    align-items: flex-end;
    justify-content: ${({ isRowActionCell }) => (isRowActionCell ? 'flex-end' : 'flex-start')};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    position: ${({ frozen }) => (frozen ? 'sticky' : 'relative')};
    cursor: ${({ isRowActionCell }) => isRowActionCell && 'default'};
    padding: ${getHeadCellPadding};

    ${Text.Style} {
        ${({ theme }) => getFontStyle({ theme, fontVariant: theme.table.header.fontVariant })}
    }

    &:not(:last-child) {
        &::after {
            ${({ isRowActionCell, children, tableSize }) =>
                isRowActionCell ? children && getBorder('right', tableSize) : getBorder('right', tableSize)}
        }
    }

    ${Checkbox.Style} {
        padding: 0;
    }

    ${props => props.frozen && frozenStyle}
    ${props => props.showShadowAtRight && shadowStyle}
`;

export const ResizeHandler = styled('span')`
    ${clearMarginPadding()};
    width: 0.3rem;
    height: 100%;
    top: 0;
    right: 0;
    cursor: ew-resize;
    position: absolute;
`;
const getStyle = (theme: Theme, styleType: 'default' | 'hovered' | 'pressed', isSelected = false) => {
    const cellColors = theme.table.header.cell,
        bgColor = isSelected ? cellColors.bgColor.selected[styleType] : cellColors.bgColor[styleType],
        textColor = isSelected ? cellColors.textColor.selected[styleType] : cellColors.textColor[styleType];
    return css`
        background-color: ${bgColor};
        color: ${textColor};
        ${SvgIcon} {
            * {
                fill: ${textColor};
            }
        }
    `;
};
const headCellButtonTableSizeMap = {
    L: '0.9rem 1.6rem',
    XS: '0.5rem 0.4rem',
    default: '0.9rem 0.8rem'
};
export const HeadCellButton = styled.button<{
    withHoverEffect?: boolean;
    isSelected?: boolean;
    tableSize: Required<TableProps>['size'];
    align?: string;
}>`
    border: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};
    padding: ${({ tableSize }) => resolveValueByTableSize(tableSize, headCellButtonTableSizeMap)};
    outline: unset;
    font-family: inherit;
    border-radius: ${({ theme }) => theme.table.header.cell.borderRadius};
    cursor: ${({ withHoverEffect }) => (withHoverEffect ? 'pointer' : 'default')};
    ${({ isSelected, theme }) => getStyle(theme, 'default', isSelected)}

    &:hover {
        ${({ isSelected, withHoverEffect, theme }) => withHoverEffect && getStyle(theme, 'hovered', isSelected)}
    }

    &:active {
        ${({ isSelected, withHoverEffect, theme }) => withHoverEffect && getStyle(theme, 'pressed', isSelected)}
    }

    ${Text.Style} {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
        line-height: 1;
    }
    ${SvgIcon} {
        margin-left: 0.4rem;
        flex-shrink: 0;
    }
`;
