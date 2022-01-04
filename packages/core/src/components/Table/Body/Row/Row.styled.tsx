import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { GridTemplateProps } from '../../types';
import { defaultTableCellPaddings } from '../Cell/Styled';
import { StyledProps } from './types';

const getRowBackgroundColor = ({ theme, isSelected, disabled, even }: StyledProps & { even: boolean }) => {
    const parity = even ? 'even' : 'odd';
    return theme.table.row.bgColor[disabled ? 'disabled' : isSelected ? 'selected' : parity];
};

const getHoverStyleForCardStyle = css`
    box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.35)} `};
`;

const cardStyle = css<StyledProps>`
    border: none;
    border-radius: 0.8rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.2)} `};
    &,
    & > * {
        background-color: ${({ theme, isSelected, disabled }) => getRowBackgroundColor({ theme, isSelected, disabled, even: true })};
        color: ${({ theme, isSelected, disabled }) => theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
    }

    &&& > * {
        &:first-child {
            &,
            &::before {
                transition: ${props => !props.isExpanded && 'border-radius 200ms ease-in'};
                border-radius: ${props => (props.isExpanded ? '0.8rem 0 0 0' : '0.8rem 0 0 0.8rem')};
            }

            &::before {
                width: 0.8rem;
            }
        }
        &:last-child {
            border-radius: ${props => (props.isExpandable ? '0 0 0.8rem 0' : '0 0.8rem 0.8rem 0')};
        }
        &:nth-last-child(3) {
            border-radius: ${props => props.isExpandable && (props.isExpanded ? '0 0.8rem 0 0' : '0 0.8rem 0.8rem 0')};
        }
        &:nth-last-child(2) {
            border-radius: ${props => props.isExpandable && '0 0 0 0.8rem'};
            &::before {
                width: 0.8rem;
                border-radius: 0 0 0 0.8rem;
            }
        }
    }

    &:hover {
        box-shadow: ${({ theme }) => `0 0.2rem 0.8rem ${rgba(theme.table.shadowColor, 0.35)} `};
    }

    &:not(:last-child) {
        margin-bottom: 0.8rem;
    }
`;

const getHoverStyleForNormalStyle = (style: 'shadow' | 'outlined') =>
    style === 'outlined'
        ? css<StyledProps>`
              z-index: 2;
              border-radius: 0.2rem;
              border: 0.2rem solid ${({ theme }) => theme.table.row.hoveredStyle.color};
              padding-bottom: 0;
          `
        : css<StyledProps>`
              z-index: 2;
              box-shadow: ${({ disabled, onClick, theme }) =>
                  !disabled && onClick && `0 0.2rem 0.4rem ${rgba(theme.table.shadowColor, 0.2)} `};
          `;

const getBorderStyle = (rowHoveredStyle: 'shadow' | 'outlined') =>
    rowHoveredStyle === 'outlined'
        ? css<StyledProps>`
              border-width: 0.2rem;
              border-style: solid;

              &:nth-child(odd) {
                  border-color: ${({ theme, isSelected, disabled }) => getRowBackgroundColor({ theme, isSelected, disabled, even: false })};
              }

              &:nth-child(even) {
                  border-color: ${({ theme, isSelected, disabled }) => getRowBackgroundColor({ theme, isSelected, disabled, even: true })};
              }
          `
        : ``;

const getPadding = (rowHoveredStyle: 'shadow' | 'outlined') =>
    rowHoveredStyle === 'outlined'
        ? css`
              padding-bottom: 0.1rem;
          `
        : '';

const rowSeparatorStyle = css<StyledProps>`
    &:not(:last-child) {
        border-bottom: 0.1rem solid ${({ theme }) => theme.table.row.separatorColor};
        ${({ theme }) => getPadding(theme.table.row.hoveredStyle.style)}
    }
`;

const normalStyle = css<StyledProps>`
    &&:hover {
        ${({ theme }) => getHoverStyleForNormalStyle(theme.table.row.hoveredStyle.style)};
    }

    &:nth-child(odd) {
        &,
        & > * {
            background-color: ${({ theme, isSelected, disabled }) => getRowBackgroundColor({ theme, isSelected, disabled, even: false })};
            color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'odd']};
        }
    }

    &:nth-child(even) {
        &,
        & > * {
            background-color: ${({ theme, isSelected, disabled }) => getRowBackgroundColor({ theme, isSelected, disabled, even: true })};
            color: ${({ theme, isSelected, disabled }) =>
                theme.table.row.textColor[disabled ? 'disabled' : isSelected ? 'selected' : 'even']};
        }
    }

    ${({ theme }) => getBorderStyle(theme.table.row.hoveredStyle.style)};
    ${({ withRowSeparators }) => withRowSeparators && rowSeparatorStyle}
`;

export const Row = styled('tr').attrs(({ gridTemplateColumns }: GridTemplateProps) => ({
    style: {
        gridTemplateColumns
    }
}))<StyledProps>`
    display: grid;
    position: relative;
    align-items: center;
    min-width: fit-content;
    outline: none;
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'pointer' : 'inherit')};
    ${({ showRowWithCardStyle }) => (showRowWithCardStyle ? cardStyle : normalStyle)}
    ${({ isNavigated, showRowWithCardStyle, theme }) =>
        isNavigated && (showRowWithCardStyle ? getHoverStyleForCardStyle : getHoverStyleForNormalStyle(theme.table.row.hoveredStyle.style))}
`;

export const NoResultCell = styled('td')<{ width: number; tableSize: keyof typeof defaultTableCellPaddings }>`
    text-align: center;
    padding: ${({ tableSize }) => defaultTableCellPaddings[tableSize]};
    width: ${({ width }) => `${width}px`};
`;

export const NoResultRow = styled(Row)<{ withMinimap?: boolean }>`
    justify-content: center;
    align-items: center;
    ${({ withMinimap }) => withMinimap && `min-height: 4.6rem;`}
`;
