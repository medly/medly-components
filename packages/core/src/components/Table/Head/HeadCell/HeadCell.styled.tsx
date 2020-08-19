import { SvgIcon } from '@medly-components/icons';
import { Theme } from '@medly-components/theme';
import { clearMarginPadding, css, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
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
    padding: ${({ hidden, isRowActionCell, tableSize }) =>
        hidden ? '0' : isRowActionCell ? `1.6rem ${tableSize === 'L' ? '2rem' : '1.2rem'} ` : '0.8rem'};

    &:not(:last-child) {
        &::after {
            ${({ isRowActionCell, children }) => (isRowActionCell ? children && getBorder('right') : getBorder('right'))}
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

export const HeadCellButton = styled.button<{
    withHoverEffect: boolean;
    isSelected: boolean;
    tableSize?: TableProps['size'];
    align: string;
}>`
    border: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${({ align }) => (align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start')};
    padding: ${({ tableSize }) => (tableSize === 'L' ? '0.9rem 1.6rem 1.1rem' : '0.9rem 0.8rem 1.1rem')};
    outline: unset;
    font-family: inherit;
    border-radius: 0.8rem;
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
    }
    ${SvgIcon} {
        margin-left: 0.4rem;
        flex-shrink: 0;
    }
`;
